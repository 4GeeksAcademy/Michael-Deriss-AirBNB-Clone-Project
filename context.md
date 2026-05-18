Home page: The home page has some navigation options at the top of the screen and some suggested bookings for the user based on various locations. The navigation options are labeled links in the top middle of the page to the Home Page, Catalog Page (labeled as Experiences) and a Services page with various services when opened like barber, massage etc with photos for each.
Catalog Page: A page which shows ideas for various activities like landmarks, outdoor activities, museums, etc with a sort control (high/low) by price
Room Detail Page: This page loads the data for the room, it includes the price, stars, reviews, location etc

The main components are a sticky 2nd nav row that says "Where" "When" "Who" (Clicking on each is a drop down menu without the drop down arrow that shows various places, dates and guests profiles for ages 13+, 2-12, 0-2 and pets) and a search button as well in the sticky nav row. The sticky nav row will be on all pages , and AirBNB button with a red triangle logo next to it in the top left that goes back to the home page. Mobile first design
at 375px

This is to be done with Next.js 16, TypeScript, Tailwind CSS and no starter template.
- All components are functional and defined with const, no class components
- -Typescript types or interfaces are defined for the main data shapes (listing, room)
- useState used in at least three distinct cases: search filtering, active category, sort order, guest counter, or photo gallery index
- useEffect is used to data loading on mount in at least two pages, with a visible loading state while data is not available
- The room detail page includes all 5 sections: photo gallery (with navigation), listing header, host info, amenities and booking card
- Components are split into individual files each with a single responsibility
