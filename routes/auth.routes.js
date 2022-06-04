const router = require("express").Router();
const AuthorModel = require("../models/Author.Model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isLoggedIn = require("../middlewares/isLoggedIn.js");

// POST "/api/auth/signup" => Registrar un usuario
router.post("/signup", async (req, res, next) => {
  const { name, lastName, username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({
      errorMessage:
        "Los campos de nombre de usuario, email y contraseña deben estar rellenos",
    });
    return;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (passwordRegex.test(password) === false) {
    res.status(400).json({
      errorMessage:
        "Contraseña no válida. Mínimo 8 caracteres. Debe contener al menos una letra y un número.",
    });
    return;
  }

  try {
    const foundEmail = await AuthorModel.findOne({ email });

    if (foundEmail !== null) {
      res.status(400).json({
        errorMessage: "Ya existe un usuario con ese email",
      });
      return;
    }

    const foundUsername = await AuthorModel.findOne({ username });
    if (foundUsername !== null) {
      res.status(400).json({
        errorMessage: "El nombre de usuario ya se está utilizando",
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await AuthorModel.create({
      username,
      name,
      lastName,
      email,
      password: hashPassword,
    });

    res.json("El usuario se ha registrado correctamente");
  } catch (error) {
    next(error);
  }
});

// POST ("/api/auth/login") => Verificar credenciales del usuario y darle acceso
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      errorMessage:
        "Los campos de email y contraseña deben estar rellenos",
    });
    return;
  }

  try {
    const foundAuthor = await AuthorModel.findOne({ email });
    if (foundAuthor === null) {
      res.status(400).json({
        errorMessage: "El usuario no está registrado",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, foundAuthor.password);
    if (passwordMatch === false) {
      res.status(401).json({
        errorMessage: "La contraseña es incorrecta",
      });
      return;
    }

    const payload = {
      _id: foundAuthor._id,
      email: foundAuthor.email,
      username: foundAuthor.username,
      name: foundAuthor.name,
      lastName: foundAuthor.lastName,
      admin: foundAuthor.admin,
    };

    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "12h",
    });

    res.json({ authToken });
  } catch (error) {
    next(error);
  }
});

// GET "api/auth/verify" => Verificar token
router.get("/verify", isLoggedIn, async (req, res, next) => {
  res.json(req.payload);
});

module.exports = router;
