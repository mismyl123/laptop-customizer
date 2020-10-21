import React from 'react';

function Features(){
render() {
    const options = this.props.options.map((item, index) => {
    const selectedClass = item.name === this.props.selected[this.props.name].name ? 'feature__selected' : '';
    const featuresClass = 'feature__option ' + selectedClass;
    return (
      <FeaturesOption 
          featureClass={featuresClass}
          key={index} 
          onSelect={this.props.onSelect}
          item={item}
          featureName={this.props.name}
      />
    )})

    return (
      <div className="feature" key={this.props.name}>
        <div className="feature__name">{this.props.name}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    )
  }}

export default Features;