# Requirements for phone book application

With this phone book application the user will be enabled to view, manage and
search his contacts. A contact in this context represents all data the user can
use to contact a person. This data ranges from the name of the person, to his
phone numbers as well as his mail and postal addresses.


## Functional Requirements

### Mandatory

* Show all entries (5 per page)
* Show details of a single entry
* Search entry by phone number
* A phone book entry has the following properties
  * The name of the person (first, last)
  * A variable number of phone numbers

### Optional

* Search entry by person name (first and last)
* A phone book entry has the following additional properties
  * The name of the person (title/degree)
  * A variable number of categories (work, friends, family, etc)
  * Business information such as company name, position, etc
  * A variable number of postal addresses
  * A variable number of mail addresses
* The following phone book entry properties have tags for private, mobile, business, etc
  * phone numbers
  * postal addresses
  * mail addresses


## Non-functional Requirements

* AngularJS or ReactJS Frontend
* ExpressJS Backend
* Datamanagement by database
