rocket
======

# Big Bugs
- Keyboard glitches when editing info on push panels
- scrollTop not working when transitioning between sections
- Geolocate not working
- Add new styling and UI not built

# Little Bugs
- No "count up" scrolling happening on big numbers
- last row of numbers not working on keypad

## Transactions

### Add New
- Enter digits
- First digit replaces the zero
- Decimals must be entered manually (as opposed to an automatic second decimal)
- Validation? in case the user doesn't include cents or .000 something
- Swipe to left for next screen
- Vendor entry

### View in list
- Ordered by date (forced)



## Budgets

### View
- See all budgets in a list
- Graph showing % spent

### Edit
- Edit each budget by tapping an item in the list
- Variables
-- Name
-- Recurring?
-- Amount
-- Date Due?

###





var hasdec = 0;
var fromdec = 0;

# press .key

if fromdec < 2

if length < 5
	add digit

else if length == 5
	no add digit
	shake

else if fromdec == 2
	no add digit
	shake

# press .key

if hasdec == 1 
	fromdec += 1

# press .del

if (length > 0 && fromdec > 0)
	length -1
	fromdec -1

else if (length > 0 && fromdec == 0)
	length -1


