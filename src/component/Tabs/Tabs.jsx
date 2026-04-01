
import Products from '../Products/Products';

const Tabs = ({ activeTab, setActiveTab, cartCount }) => {


  return (

<div className="tabs tabs-box justify-center bg-transparent p-6 rounded-full shadow max-w-7xl m-auto my-6">
      <input
        type="radio" name="my_tabs_1"
        className={`tab full w-36 rounded-full
            ${activeTab === "product" ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium': 'font-bold text-black'}
          `}
        aria-label="Products"
        onClick={() => setActiveTab("product")}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab full w-36 rounded-full
            ${activeTab === "cart" ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium': 'font-bold text-black'}
          `}
        aria-label={`cart (${cartCount})`}
        onClick={() => setActiveTab("cart")}
      />
</div>

  );
};

export default Tabs;