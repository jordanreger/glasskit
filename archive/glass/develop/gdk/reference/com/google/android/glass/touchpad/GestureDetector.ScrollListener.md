# GestureDetector.ScrollListener

Added in API level XE12

This listener receives continuous horizontal scrolling events independent of the finger count.

| Public Methods | |
| --- | --- |
| abstract boolean | [onScroll](#onScroll)(float displacement, float delta, float velocity) |

## Public Methods

Added in API level XE12

#### public abstract boolean **onScroll** (float displacement, float delta, float velocity) 

Called while the user is scrolling after initial horizontal scroll.

| Parameters | |
| --- | --- |
| displacement | distance between current event and first down event x value |
| delta | delta between two consecutive x motion events |
| velocity | velocity of current x motion event |

##### Returns
- `true` if the events were handled

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).