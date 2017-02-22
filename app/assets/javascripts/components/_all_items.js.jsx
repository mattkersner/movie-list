var AllItems = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(item) {
    this.props.onUpdate(item);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
        <div className="movies" key={item.id}>
          <Item item={item}
          handleDelete={this.handleDelete.bind(this, item.id)}
          handleUpdate={this.onUpdate} />
        </div>
      )
    });

    return (
      <div className="flex">
        {items}
      </div>
    )
  }
});
