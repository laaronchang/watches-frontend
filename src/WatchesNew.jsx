export function WatchesNew(props) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWatch(params, () => event.target.reset());
  };

return (
<div>
  <h1>New Watch</h1>
  <form onSubmit={handleSubmit}>
    <div>
      Brand: <input name="brand" type="text" />
    </div>
    <div>
      Model: <input name="model" type="text" />
    </div>
    <div>
      Color: <input name="color" type="text" />
    </div>
    <div>
      Price: <input name="price" type="text" />
    </div>
    <div>
      Image URL: <input name="image_url" type="text" />
    </div>
    <br />
    <button type="submit">Create Entry</button>
  </form>
</div>
);
}