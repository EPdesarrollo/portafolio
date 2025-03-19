import validator from "validator";
import nodemailer from "nodemailer";

export async function POST(req) {
  // variables
  const { HCAPTCHA_SECRET } = process.env;

  // request variables
  const method = req.method;
  const data = await req.json();
  const { messageObject } = data;
  const {
    name,
    email,
    message,
    // checkboxGhost,
  } = messageObject;
  const { token } = data;

  // para asegurarse de que todos los datos son 'strings' y poder sanitizarlos
  const nameString = name + "";
  const emailString = email + "";
  const messageString = message + "";
  //   const checkboxGhostString = checkboxGhost + "";

  // escaped
  const nameEscaped = validator.escape(nameString);
  const emailEscaped = validator.escape(emailString);
  const messageEscaped = validator.escape(messageString);
  //   const checkboxGhostEscaped = validator.escape(checkboxGhostString);

  // si el metodo no es POST devuelve fallo
  if (method !== "POST") {
    return Response.json({
      status: 400,
      message: "Method not allowed",
      type: "concreto",
    });
  }
  // bots
  //   if (checkboxGhostEscaped === "on") {
  //     return Response.json({
  //       status: 400,
  //       message: "",
  //       type: "concreto",
  //       count: "1000",
  //     });
  //   }

  // si el email esta vacio devuelve fallo
  if (!emailEscaped) {
    return Response.json({
      status: 400,
      message: "I need an email to contact you",
      type: "concreto",
      count: "2",
    });
  }
  // si el email tiene un formato incorrecto
  if (emailEscaped && !validator.isEmail(emailString)) {
    return Response.json({
      status: 400,
      message: "Please enter a correct email address",
      type: "concreto",
      count: "3",
    });
  }
  // si el email esta vacio devuelve fallo
  if (!messageEscaped) {
    return Response.json({
      status: 400,
      message: "The message field is mandatory, tell me a little bit more",
      type: "concreto",
      count: "4",
    });
  }

  try {
    // throw new Error();

    // const response = await fetch(
    //   "https://api.hcaptcha.com/siteverify?secret=0x0000000000000000000000000000000000000000&response=10000000-aaaa-bbbb-cccc-000000000001"
    // );
    const response = await fetch(
      `https://api.hcaptcha.com/siteverify?secret=${HCAPTCHA_SECRET}&response=${token}`
    );
    const data = await response.json();
    // console.log(data);
    if (!data.success) {
      return Response.json({
        status: 400,
        message: "This field is mandatory",
        type: "concreto",
        count: "5",
      });
    }

    // nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.PUBLIC_EMAIL,
        pass: process.env.MAIL_KEY,
      },
    });
    //
    const options = {
      from: "exploredeveloper123@gmail.com",
      to: "exploredeveloper123@gmail.com",
      subject: "MENSAJE DESDE EL PORTAFOLIO",
      html: `
          <h2>Mail desde el portafolio epapell.dev</h2>
          <p><b>Name: </b>${nameEscaped}</p>
          <p><b>Email: </b>${emailEscaped}</p>
          <p><b>Message: </b>${messageEscaped}</p>
      `,
      disableUrlAccess: true,
    };
    await transporter.sendMail(options);

    // // final response
    return Response.json({
      status: 200,
      message: "Message sent",
    });
  } catch (err) {
    console.log(err);
    return Response.json({
      status: 400,
      message:
        " Oh no... there has been an error. Please try again or send me a direct message.",
      type: "general",
    });
  }
}
