import {Client,Account} from "appwrite";

export const client = new Client();

client.
      setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('673b782e001129b77ca7')

export const account = new Account(client)