Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
  { service: "oauth" },
  {
    $set: {
      clientId: process.env['ACCOUNTS_DRIBBBLE_ID'],
      loginStyle: "popup",
      secret:  process.env['ACCOUNTS_DRIBBBLE_SECRET']
    }
  }
);
