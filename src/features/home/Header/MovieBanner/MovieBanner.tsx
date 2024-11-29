import Like from "./Like/Like";
import CircularProgressWithLabel from "../../../shared/CircularProgressWithLabel/CircularProgressWithLabel";

const MovieBanner = (props: {
  title: string;
  description: string;
  value: number;
}): JSX.Element => {
  const { title, description, value } = props;
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
        <CircularProgressWithLabel value={value} fontsize="30px" size="92px" />
      </aside>
    </article>
  );
};

export default MovieBanner;
