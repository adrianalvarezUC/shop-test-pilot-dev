

# Test Ecommerce Website for GTM & GA4 Testing

A static ecommerce website designed for testing Google Tag Manager (GTM-5KK3QS3Q), consent banners, and server-side tracking with standard GA4 ecommerce dataLayer events.

## Pages & Layout

### Shared Layout
- **Header** with logo, navigation links (Home, categories), and cart icon with item count badge
- **Footer** with basic links
- **GTM container snippet** with your GTM ID (GTM-5KK3QS3Q) installed in the `<head>`

### 1. Homepage
- Hero banner section
- Featured product grid showing a selection of products from different categories
- Category navigation cards
- Fires `view_item_list` dataLayer event for featured products

### 2. Category Page
- Displays products filtered by category (e.g., Electronics, Clothing, Accessories)
- Product cards with image, name, price
- Fires `view_item_list` dataLayer event when category loads

### 3. Product Detail Page
- Product image, name, description, price
- Quantity selector and "Add to Cart" button
- Fires `view_item` dataLayer event on page load
- Fires `add_to_cart` dataLayer event when adding to cart

### 4. Cart Page (accessible from header icon)
- Lists all items in cart with quantities and prices
- Update quantity / remove items
- Order total summary
- "Proceed to Checkout" button
- Fires `view_cart` dataLayer event on load

### 5. Checkout Page
- Dummy form with shipping info and payment fields (no real processing)
- Order summary sidebar
- "Place Order" button
- Fires `begin_checkout` dataLayer event on page load
- Fires `purchase` dataLayer event on form submission
- Redirects to a "Thank You / Order Confirmation" page after purchase

## Product Data
- Hardcoded static product data (~12-15 products across 3-4 categories)
- Each product has: id, name, description, price, image (placeholder), category, brand

## Cart Functionality
- Client-side cart using React state (persisted in localStorage)
- Add, remove, update quantity

## GA4 DataLayer Events (Core Set)
All events follow the standard GA4 ecommerce schema pushed to `window.dataLayer`:
- **view_item_list** — Homepage & Category pages
- **view_item** — Product Detail page
- **add_to_cart** — When user clicks "Add to Cart"
- **view_cart** — Cart page
- **begin_checkout** — Checkout page load
- **purchase** — On order submission

Each event includes proper `ecommerce` object with `currency`, `value`, and `items[]` array containing `item_id`, `item_name`, `item_category`, `item_brand`, `price`, `quantity`.

## Design
- Clean, minimal ecommerce look
- Responsive layout
- Professional enough to look like a real store for realistic testing

