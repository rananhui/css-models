# Display and Positioning

Using **display**(change how elements organize themselves) and **position**(to change how page organizes elements) css properties to improve the layout of the  site.

Special Notes

**Fixed elements** are displayed as part of the window and not part of the layout so layout will not know anything about
it. Because of this we need to do the following:

1. Shift the layout 
2. Set larger width since it will not resize automatically like the rest of the layout. 
3. Decide which image shows up on top using z-index.
4. Set bottom if fixed item is on the bottom. If item is first item on the top, it will not need any adjustments.

**inline-block**, is a hybrid display type for displaying elements horizontally and allows width/height to be set.
When setting the menu display, pls note it will not change to horizontal because the width of each element takes up **all the space**. Change the width/height.
