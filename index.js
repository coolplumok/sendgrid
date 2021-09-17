const path  = require("path");
const Email = require("sendgrid-template-helper");

const settings = {
  apiKey: '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',
  prefix: "monitoring_",
};

const email = new Email(settings);

email
  .send({
    to: "bluestar0804@outlook.com",
    from: "support@usemonitor.com",
    subject: `Notification from Monitoring`,
    templatePath: path.resolve(__dirname, "./email_template.html"), // absolute path to your template
    dynamicTemplateData: {
        name: "Aldrich",
        domain: "https://google.com",
        url: "https://miro.medium.com/max/700/1*3sXxlNQQbomUQt86XyHEmA.png",
        similarity: 0.8994334343234        
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch(error => {
    // Log friendly error
    console.error(error);

    if (error.response) {
      // Extract error msg
      const {message, code, response} = error;

      // Extract response msg
      const {headers, body} = response;

      console.error(body);
    }
  });