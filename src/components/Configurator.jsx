import { sofaColors } from "../constants";
import { useSofaStore } from "../store/sofaStore";

const Configurator = () => {
 
  const material = useSofaStore(state => state.material)
  const setMaterial = useSofaStore(state => state.setMaterial)
  const color = useSofaStore(state => state.color)
  const setColor = useSofaStore(state => state.setColor)

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Sofa material</div>
        <div className="configurator__section__values">
          <div
            className={`item ${material === "leather" ? "item--active" : ""}`}
            onClick={() => setMaterial("leather")}
          >
            <div className="item__label">Leather</div>
          </div>
          <div
            className={`item ${material === "fabric" ? "item--active" : ""}`}
            onClick={() => setMaterial("fabric")}
          >
            <div className="item__label">Fabric</div>
          </div>
        </div>
      </div>
      <div className="configurator__section">
        <div className="configurator__section__title">Sofa color</div>
        <div className="configurator__section__values">
          {sofaColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === color.color ? "item--active" : ""
              }`}
              onClick={() => setColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
