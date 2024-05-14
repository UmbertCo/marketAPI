import session from "express-session";

export const sess = session({
    secret:'catdog',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})

export const auth = (req, res, next) => {
    console.log(req.session)
}