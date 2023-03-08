# MenuUtils

Added in API level XE12

A collection of extensions for [`Menu`](http://developer.android.com/reference/android/view/Menu.html) and related classes.

| Public Methods | |
| --- | --- |
| static void | [setDescription](#setDescription)([MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item, [CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) description) |
| static void | [setDescription](#setDescription)([MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item, int description) |
| static void | [setInitialMenuItem](#setInitialMenuItem)([Menu](http://developer.android.com/reference/android/view/Menu.html) menu, [MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item) |

| Inherited Methods | |
| --- | --- |
| From class java.lang.Object | |
| [Object](http://developer.android.com/reference/java/lang/Object.html) | clone() |
| boolean | equals([Object](http://developer.android.com/reference/java/lang/Object.html) arg0) |
| void | finalize()|
| final [Class](https://developer.android.com/reference/java/lang/Class.html)\<?\> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| [String](https://developer.android.com/reference/java/lang/String.html) | toString() |
| final void | wait() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |

## Public Methods

Added in API level XE12

#### public static void **setDescription** ([MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item, [CharSequence](http://developer.android.com/reference/java/lang/CharSequence.html) description) 

Sets an additional description text on a menu item.

The description attribute can only be set through this method. The attribute is not supported in XML.

| Parameters | |
| --- | --- |
| item | the menu item |
| description | additional description text |

| Throws | |
| --- | --- |
| [RuntimeException](http://developer.android.com/reference/java/lang/RuntimeException.html) | if item is not a concrete implementation |

Added in API level XE12

#### public static void **setDescription** ([MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item, int description) 

Sets an additional description text on a menu item.

The description attribute can only be set through this method. The attribute is not supported in XML.

| Parameters | |
| --- | --- |
| item | the menu item |
| description | additional description text (as a resource ID) |

| Throws | |
| --- | --- |
| [RuntimeException](http://developer.android.com/reference/java/lang/RuntimeException.html) | if item is not a concrete implementation |

Added in API level XE12

#### public static void **setInitialMenuItem** ([Menu](http://developer.android.com/reference/android/view/Menu.html) menu, [MenuItem](http://developer.android.com/reference/android/view/MenuItem.html) item) 

Sets the initial menu item when users open a menu.

By default, the first menu item appears with all the other items to the right. This method lets you set another menu item to initially show, and other items can potentially appear to the left or right of the item that is initially shown.

| Parameters | |
| --- | --- |
| menu | the menu on which preferred initial menu item should be set |
| item | the preferred initial menu item. If this item cannot be found, the menu falls back to the default behavior |

| Throws | |
| --- | --- |
| [RuntimeException](http://developer.android.com/reference/java/lang/RuntimeException.html) | if item is not a concrete implementation |

---

Portions of this page are reproduced from work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
