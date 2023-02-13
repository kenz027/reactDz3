import Star from "./Star";

export default function Stars({ count }) {
  return (
    isFinite(count) && count > 0 && count <= 5 ? <ul className="card-body-stars u-clearfix">
      {[...Array(Number(count))].map( (star, i) =>
        <li className="card-body" key={`s${i}`}>
          <Star />
        </li>
    )}
    </ul> : ''
  );
}
