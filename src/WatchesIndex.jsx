export function WatchesIndex(props) {
  return (
    <div>
      <h1>All Watches</h1>
      {props.watches.map((watch) => (
        <div key={watch.id}>
          <h1>{watch.brand}</h1>
          <h2>{watch.model}</h2>
          <p>{watch.color}</p>
          <p>{watch.price}</p>
          <img src={watch.image_url} width="300"></img>
        </div>
      ))}
    </div>
  );
}