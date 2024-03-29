import React from "react";
import {Client, Locale} from "appwrite";

function Hey() {
  const client = new Client();

  const locale = new Locale(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("5df5acd0d48c2"); // Your project ID

  const promise = locale.listCurrencies();

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
  return <div>Hey</div>;
}

export default Hey;
