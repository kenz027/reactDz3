export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((item) => {
        const currencyHandler = (item) => {
          switch (item.currency_code) {
            case "USD":
              return `$ ${item.price}`;
            case "EUR":
              return `€ ${item.price}`;
            case "GBP":
              return `${item.price} GBP`;
          }
        };
        if (item.quantity) {
          return (
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage?.url_570xN} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">
                  {item.title?.length > 50
                    ? item.title.slice(50) + "..."
                    : item.title}
                </p>
                <p className="item-price">{currencyHandler(item)}</p>
                <p
                  className={`item-quantity + ${
                    item.quantity <= 10
                      ? "level-low"
                      : item.quantity > 10 && item.quantity <= 20
                      ? "level-medium"
                      : "level-high"
                  } `}
                >
                  {item.quantity} left
                </p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
