
const RestaurantMenu = () => {
    
    return (
<div className="main-menu">
    <div>

    <div class="restaurant-card">
        <h2>Pizza Hut</h2>
        <div class="details">
            <span class="rating">⭐ 4.3 (796 ratings)</span>
            <span class="price">₹350 for two</span>
        </div>
        <p class="category"><a href="#">Pizzas</a></p>
        <p class="location">📍 Outlet: DWARKA</p>
        <p class="delivery-time">⏳ 20-25 mins</p>
    </div>

    {/* <!-- Menu Section --> */}
    <h3 class="menu-title">Recommended (20)</h3>
    
    <div class="menu-container">

        {/* <!-- Menu Item 1 --> */}
        <div class="menu-card">
            <div class="menu-content">
                <h4>Veggie Supreme</h4>
                <span class="price">₹379</span>
                <span class="discount">🔥 60% OFF | USE SWIGGYIT</span>
                <span class="rating">⭐ 4.6 (15)</span>
                <p class="description">Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese.</p>
                <button class="add-btn">+ Add</button>
            </div>
        </div>

        {/* <!-- Menu Item 2 --> */}
        <div class="menu-card">
            <div class="menu-content">
                <h4>Cheese Burst Pizza</h4>
                <span class="price">₹299</span>
                <span class="discount">🔥 50% OFF | USE CHEESY50</span>
                <span class="rating">⭐ 4.8 (25)</span>
                <p class="description">A delicious cheese burst pizza topped with extra mozzarella, fresh veggies, and a crispy crust.</p>
                <button class="add-btn">+ Add</button>
            </div>
        </div>

    </div>

    </div>
</div>

    )
}

export default RestaurantMenu;

