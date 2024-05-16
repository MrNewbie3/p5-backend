import * as admin from "firebase-admin";

const serviceAccount = require("../../siabsen-eccab-firebase-adminsdk-r299o-53d6e469db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://siabsen-eccab-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export const sendNotif = async (token: string, title: string, body: string) => {
  try {
    if (!token || typeof token !== "string") {
      throw new Error("Invalid FCM token provided");
    }
    const message = {
      notification: {
        title,
        body,
      },
      android: {
        notification: {
          sound: "default",
        },
        data: {
          title,
          body,
        },
      },
      token,
    };
    const response = await admin.messaging().send(message);
    console.log("success send response: " + response);
    return response
  } catch (error) {
    console.log(error);
    throw new Error("error" + error);
  }
};

