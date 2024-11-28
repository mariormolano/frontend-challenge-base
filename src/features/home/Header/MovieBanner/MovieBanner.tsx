import Like from "./Like/Like";
import CircularProgressWithLabel from "./CircularProgressWithLabel/CircularProgressWithLabel";

const MovieBanner = (props: {
  title: string;
  description: string;
  value: number;
}): JSX.Element => {
  const { title, description, value } = props;
  let percentageColor: object = { color: "black" };

  if (value > 0) {
    percentageColor = { color: "red" };
  }
  if (value > 33) {
    percentageColor = { color: "yellow" };
  }
  if (value > 66) {
    percentageColor = { color: "green" };
  }

  return (
    <article>
      <section>
        <dl>
          <dt>
            <h1>{title}</h1>
          </dt>
          <dd>{description}</dd>
        </dl>
      </section>
      <aside>
        <Like />
        <CircularProgressWithLabel
          value={value}
          sx={percentageColor}
          size="92px"
        />
      </aside>
    </article>
  );
};

export default MovieBanner;
