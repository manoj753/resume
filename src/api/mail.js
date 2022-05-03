const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  sgMail.setApiKey(
    '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',
  );

  const { name, email, description } = req.body;

  const subject = 'Contact Mail - Verified Resume';
  const text = `Name: ${name}, EmailID: ${email}, Message: ${description}`;
  const html =
    `<html><head><title>${{ subject }}</title></head>` +
    `<body>` +
    `<h1>Contact mail from ${{ name }}</h1>` +
    `<h2>Name : <strong>${{ name }}</strong></h2>` +
    `<h2>EmailID : <strong>${{ email }}</strong></h2>` +
    `<h2>Message : <strong>${{ description }}</strong></h2>` +
    `</body>` +
    `</html>`;

  const content = {
    to: 'vicky@yourflow.com.au',
    from: 'app@veriresumes.com',
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR ', error);
    res.status(400).send('Message not sent.');
  }
};
