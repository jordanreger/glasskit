# Voice Command Checklist

Glass voice commands are carefully tuned and designed for the best accuracy and recognition. This means they take quite a bit of time for us to model and develop.

We've come up with the following guidelines to help us more quickly evaluate and build your voice commands. You should follow the guidelines or have a good reason to break them.

| Guideline | Good Example | Bad Example |
| --------- | ------------ | ----------- |
| Is general enough to apply to multiple Glassware, but still has a clear purpose | "ok glass, learn a song" | "ok glass, learn something", "ok glass, learn a song on guitar" |
| Is colloquial and can explain Glass features in a conversation | "ok glass, take a picture" ("You can use Glass to take a picture") | "ok glass, take picture" ("You can use Glass to take picture") |
| Is comfortable to say in public | "ok glass, find a doctor" | "ok glass, find a gynecologist" |
| Brings the user from intent to action as quickly as possible | "ok glass, find a recipe for" (this allows users to speak "chicken kiev" and immediately see the recipe) | "ok glass, show me a cookbook" (this forces users to look through a list for what they want) |
| Avoids brand words | "ok glass, make a video call" | "ok glass, start a hangout" |
| Is long enough to ensure high recognition quality (at least three syllables) | "ok glass, make a video call" | "ok glass, hangout" |
| Fits on a single line (less than 600px wide at 40px Roboto Thin) | "ok glass, add a calendar event" | "ok glass, create a new calendar event" |
| Does not sound similar to existing commands | | "ok glass, find a race" (too similar to "ok glass, find a place") |
| Does not require immediate interactivity in Mirror API Glassware. Immediate interactivity is only supported with GDK Glassware. | "ok glass, take a note" (This allows users to speak a note and move on to their next task without worrying about a response from the Glassware.) | "ok glass, find a recipe" (This requires a response from the Glassware so users can view the results. This is an acceptable GDK voice command but not acceptable for the Mirror API.) |
| Has an imperative verb with an object | "ok glass, make a video call" | "ok glass, video call" |
| Uses articles when possible | "ok glass, record a video" | "ok glass, record video" |
| Uses definite articles only when the object is definite | "ok glass, show me the weather" | "ok glass, take the picture" |
| Uses "this" when there is only one relevant instance of the object | "ok glass, recognize this song" | "ok glass, recognize songs" |
| Uses me and my when appropriate | "ok glass, show me the news" | "ok glass, show the news" |
| Refers to Glass as the subject carrying out the action | "ok glass, start a run" (Glass starts Glassware that tracks a run) | "ok glass, go running" (The user is the one that actually goes running) |

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
