# Authentication for GDK Glassware

If your GDK Glassware needs to authenticate users against a web service, the GDK provides an API that lets the user enter their credentials when they install your Glassware.

By using this API, you provide a consistent user experience for Glass users and avoid the overhead of implementing your own custom authentication schemes.

> **Note**: Currently, you can only test and use this API after we've uploaded your APK to MyGlass, which happens during the review process.


## Creating a Google API service account

When authentication is set up correctly, your web app's back end uses the Mirror API to push users' account information to Glass after they authenticate with your service.

In order to access this API, create a Google API project and then create a client ID for a "service account" (and **not** a "web application"). By using a service account, users do not have to separately grant your application permission to push their credentials to Glass and won't be presented with both the OAuth permissions page and your own authentication page again.

To create this account:

1. Go to the [Google Developers Console](https://cloud.google.com/console).
2. Click the **Create Project** button and enter the requested information.
3. Once your project is created, make a note of the **Project Number**, which you will need later.
4. Under **APIs & auth**, click **APIs** and enable the **Google Mirror API** for your new project.
5. Under **APIs & auth**, click **Credentials**, then click **Create New Client ID.** Check the box labeled **Service account** to create a new OAuth 2.0 client ID for the project.
6. A popup window will inform you that the private key is being downloaded to your computer and provides you with the password for that private key. **Once you close this window, you will not be able to download this private key or see the password again. If they are ever lost, you must create a new one.**
7. Make a note of the service account's e-mail address, which you will need later to make the API call.

## Providing metadata about your Glassware

When you are ready to submit your Glassware, you will need to provide the following information. This allows us to set up your Glassware to be authenticated correctly when you implement it.

- Your **authentication URL**, which users are redirected to when they turn on your Glassware in MyGlass.
- The **account type** (the string you will be using when you call the Android `AccountManager` APIs on the Glass device)
- The **package name** of your application from your `AndroidManifest.xml`
- The **numeric Google API project ID** of the project that you created above
- The **APK** to upload on MyGlass. For testing, you only need to provide this APK once to handle the initial download when your Glassware is turned on from MyGlass; after that, you can iterate and debug locally by overwriting the APK on your device. Note that this APK needs to meet the following criteria:
	- It must be zip-aligned.
	- You must not make any changes to the package name or private signing key after this (the Android package manager does not allow upgrades if either of these changes).
	- It must be smaller than 50 megabytes.
	- It must be compiled using the latest version of the GDK.


## Implementing the authentication flow

The following diagram shows the basic authentication flow for GDK Glassware:

![](gdk-auth.png)

To implement the authentication flow:

1.  When users turn on your Glassware in MyGlass, they are redirected to your authentication URL. These requests include a query parameter named `userToken` that you need to use later.

> **Warning**: Do not store this user token. It is only for use by Google's authentication endpoints to map the request back to the originated user during that session only and does not contain any information that can be used to persistently identify the user. The token is not guaranteed to be the same if the user authenticates with the same Glassware multiple times or if the user authenticates with different Glassware from the same developer.

2.  The user enters their credentials on your authentication page.  
3.  Your server validates the user's credentials. If the credentials are valid, make a Mirror API call to the `mirror.accounts.insert` method. This method requires that you specify the `https://www.googleapis.com/auth/glass.thirdpartyauth` scope when you build your Mirror service object. Examples of making this API call using either raw HTTP or Java are shown in the [account creation examples](#account_creation_examples). The parameters and request body that you provide below represent the same information that you would provide to Android's `AccountManager` if you were creating the account directly on the device.

| Property name | Value | Description |
| --- | --- | --- |
| `features[]` | list of strings | A list of features (see [`AccountManager.hasFeatures`](https://developer.android.com/reference/android/accounts/AccountManager.html#hasFeatures(android.accounts.Account,%20java.lang.String[],%20android.accounts.AccountManagerCallback%3Cjava.lang.Boolean%3E,%20android.os.Handler))). |
| `password` | string | The account password (see [`AccountManager.getPassword`](https://developer.android.com/reference/android/accounts/AccountManager.html#getPassword(android.accounts.Account))). We recommend that you **not** store the user's actual password in this field, but instead use it to store long-lived private data like a refresh token. |
| `userData[]` | list of objects | One or more pairs of user data associated with the account (see [`AccountManager.getUserData`](https://developer.android.com/reference/android/accounts/AccountManager.html#getUserData(android.accounts.Account,%20java.lang.String))). |
| `userData[].key` | string | The key associated with a particular user data key-value pair. |
| `userData[].value` | string | The value associated with a particular user data key-value pair. |
| `authTokens[]` | list of objects | One or more auth tokens associated with the account (see [`AccountManager.getAuthToken`](https://developer.android.com/reference/android/accounts/AccountManager.html#getAuthToken(android.accounts.Account,%20java.lang.String,%20android.os.Bundle,%20boolean,%20android.accounts.AccountManagerCallback%3Candroid.os.Bundle%3E,%20android.os.Handler))). |
| `authTokens[].type` | string | The type of the auth token. |
| `authTokens[].authToken` | string | The auth token. |

4.  Upon receiving the `mirror.account.insert` request, the Mirror API pushes the account to the user's Glass device(s), where you can now access it using the [`AccountManager`](https://developer.android.com/reference/android/accounts/AccountManager.html) class.

### Recommended authentication flows

Follow these guidelines to implement a user-friendly authentication flow:

-   Optimize your flow for mobile devices.
-   If your flow has a scope and the user cancels them, have a well-designed error message.
-   Ensure the scopes that you request are actually being used in your Glassware.
-   If a user account can be connected, ensure that you connect it.
-   Where possible, user data should back up to the cloud.

> **Note**: Install your Glassware at least once through MyGlass to ensure that your authentication flow is successful. As long as you've done this once, you can install via sideloading for testing purposes.

To maintain consistency in Glassware authentication, use one of the following authentication flows:

#### Mirror or hybrid without an account

1.  After toggling on in MyGlass, your authentication URL opens in a pop-up.
2.  This directly sends the user to scopes to accept.
3.  After the user accepts or cancels the scopes, close the pop-up.

#### Mirror with an account

1. After toggling on in MyGlass, your authentication URL opens in a pop-up.
	- If the user is already signed in to your service, send the user directly to scopes.
	- If the user is not signed in, show the sign-in fields, allow them to sign in to your service, and then send them to scopes.
	- If the user does not have an account, provide a link to create an account. Users must have a way to create an account as part of the install flow process.
2.  User accepts scopes.
	- If your Glassware has configurable settings, send the user to the settings page with reasonable defaults selected.
	- If your Glassware does not have configurable settings, send the user to a confirmation page. Close the pop-up if no additional configuration is required.

#### Hybrid with an account

1.  After toggling on in MyGlass, your authentication URL opens in a pop-up.
	- If the user is already signed in to your service, send the user directly to scopes.
	- If the user is not signed in, show sign in fields, allow them to sign in, and then send them to scopes.
	- If the user does not have an account, provide a link to create an account.
2.  User accepts scopes.
3.  Send a request to the Mirror API to insert the GDK Account.
	- Send the user to the settings page with reasonable defaults selected.
	- Send the user a confirmation page. Close the pop-up if no additional configuration is required.

#### Mirror or hybrid with an account and custom scopes

1.  After toggling on in MyGlass, your authentication URL opens in a pop-up.
	- If the user is already signed in to your service, send user to your internal scopes
	- If the user is not signed in, show sign in fields, allow them to sign in, and then send them to your internal scopes
	- If the user does not have an account, provide a link to create an account.
2.  When the user accepts your custom scopes, send user to Google's scopes.
3.  Send a request to the Mirror API to insert the GDK Account.
	- Send the user to the settings page with reasonable defaults selected.
	- Send the user a confirmation page. Close the pop-up if no additional configuration is required.

#### Mirror or hybrid with an Android/iPhone app

1.  After toggling on in MyGlass, your authentication URL opens in a pop-up.
2.  This directly sends the user to scopes to accept.
3.  After the user accepts scopes:
	- If the user has the companion app and is authenticated, close the pop-up window.
	- If not, send the user to an interstitial that directs them to download the app from the Google Play store or iOS store
4.  After installing the app and authenticating, close the pop-up window

#### GDK and no account

Toggling the Glassware on in MyGlass is all that is required for this flow.

#### GDK with an account

1.  After toggling on in MyGlass, your authentication URL opens in a pop-up.
	- If the user is already signed in to your service, send the user to the confirmation screen.
	- If the user is not signed in, display the sign in fields, allow them to sign in, and then send them to the confirmation screen.
	- If the user does not have an account, provide a link to create an account.
2.  User accepts scopes.
3.  Send a request to the Mirror API to insert the GDK Account.
4.  Show the confirmation screen, and close the screen after showing it for a short period of time.

### Account creation examples

Use the [client libraries](https://developers.google.com/glass/tools-downloads/client-libraries) [**TODO**: ADD LINK] for the Mirror API when possible. This makes calling `mirror.accounts.insert` to create the account easier.

#### Raw HTTP example

The example below only shows the URL of the request and an example of the JSON body that it expects. Making raw HTTP requests on behalf of a service account is much more complicated (see [Using OAuth 2.0 for Server to Server Applications](https://developers.google.com/accounts/docs/OAuth2ServiceAccount) for the full details), so we recommend that you use one of our Google API [client libraries](https://developers.google.com/glass/tools-downloads/client-libraries) [**TODO**: ADD LINK] if possible to make this easier.

Request method and URL:

```
POST https://www.googleapis.com/mirror/v1/accounts/{userToken}/com.example.myapp/username%40email.com
```

Request body:

```json
{
    "features": ["a", "b", "c"],
    "userData": [
        { "key": "realName", "value": "Rusty Shackleford" },
        { "key": "foo", "value": "bar" }
    ],
    "authTokens": [
        { "type": "your_token_type", "authToken": "zT419Ma3X2pBr0L..." }
    ]
}
```

Replace `{userToken}` in the request URL with the token that was passed to your authentication URL in step 1 of [Implementing the authentication flow](#implementing_the_authentication_flow).

#### Java Example

This example shows how to use the Java client library to call `mirror.accounts.insert`

```java
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson.JacksonFactory;
import com.google.api.services.mirror.Mirror;
import com.google.api.services.mirror.model.Account;
import com.google.api.services.mirror.model.AuthToken;
import com.google.common.collect.Lists;
...

/** Email of the Service Account */
private static final String SERVICE_ACCOUNT_EMAIL =
    "<some-id>@developer.gserviceaccount.com";

/** Path to the Service Account's Private Key file */
private static final String SERVICE_ACCOUNT_PKCS12_FILE_PATH =
    "/path/to/<public_key_fingerprint>-privatekey.p12";

/** The account type, usually based on your company or app's package. */
private static final String ACCOUNT_TYPE = "com.example.myapp";

/** The Mirror API scopes needed to access the API. */
private static final String MIRROR_ACCOUNT_SCOPES =
    "https://www.googleapis.com/auth/glass.thirdpartyauth";

/**
 * Build and returns a Mirror service object authorized with the service accounts.
 *
 * @return Mirror service object that is ready to make requests.
 */
public static Mirror getMirrorService() throws GeneralSecurityException,
    IOException, URISyntaxException {
  HttpTransport httpTransport = new NetHttpTransport();
  JacksonFactory jsonFactory = new JacksonFactory();
  GoogleCredential credential = new GoogleCredential.Builder()
      .setTransport(httpTransport)
      .setJsonFactory(jsonFactory)
      .setServiceAccountId(SERVICE_ACCOUNT_EMAIL)
      .setServiceAccountScopes(MIRROR_ACCOUNT_SCOPES)
      .setServiceAccountPrivateKeyFromP12File(
          new java.io.File(SERVICE_ACCOUNT_PKCS12_FILE_PATH))
      .build();
  Mirror service = new Mirror.Builder(httpTransport, jsonFactory, null)
      .setHttpRequestInitializer(credential).build();
  return service;
}

/**
 * Creates an account and causes it to be synced up with the user's Glass.
 * This example only supports one auth token; modify it if you need to add
 * more than one, or to add features, user data, or the password field.
 *
 * @param mirror the service returned by getMirrorService()
 * @param userToken the user token sent to your auth callback URL
 * @param accountName the account name for this particular user
 * @param authTokenType the type of the auth token (chosen by you)
 * @param authToken the auth token
 */
public static void createAccount(Mirror mirror, String userToken, String accountName,
    String authTokenType, String authToken) {
  try {
    Account account = new Account();
    List<AuthToken> authTokens = Lists.newArrayList(
        new AuthToken().setType(authTokenType).setAuthToken(authToken));
    account.setAuthTokens(authTokens);
    mirror.accounts().insert(
        userToken, ACCOUNT_TYPE, accountName, account).execute();
  } catch (IOException e) {
    e.printStackTrace();
  }
}
```

## Retrieving Accounts on Glass

Retrieving and using [`Account`](https://developer.android.com/reference/android/accounts/Account.html) objects on Glass is similar to using the standard Android [`AccountManager`](https://developer.android.com/reference/android/accounts/AccountManager.html).
1. Declare the following manifest permissions in your `AndroidManifest.xml` file:
```xml
<uses-permission android:name="android.permission.GET_ACCOUNTS" />
<uses-permission android:name="android.permission.USE_CREDENTIALS" />
```
2. Retrieve the Glassware's accounts:
```java
AccountManager accountManager = AccountManager.get(mContext);
// Use your Glassware's account type.
Account[] accounts = accountManager.getAccountsByType("com.example");

// Pick an account from the list of returned accounts.
```
3. Retrieve an auth token from the `Account`:
```java
// Your auth token type.
final String AUTH_TOKEN_TYPE = "oauth2:https://www.example.com/auth/login";

accountManager.getAuthToken(account, AUTH_TOKEN_TYPE, null, activity, new AccountManagerCallback<Bundle>() {
    public void run(AccountManagerFuture<Bundle> future) {
        try {
            String token = future.getResult().getString(AccountManager.KEY_AUTHTOKEN);
            // Use the token.
        } catch (Exception e) {
            // Handle exception.
        }
    }
}, null);
```

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).