import React, { Component } from 'react';
import slugify from 'slugify';
import './FormSection.css';
import FormSectionItem from '../FormSectionItem/FormSectionItem';

class FormSection extends Component {
	static defaultProps = {
		header: '',
		featureOptions: [],
		selectedFeature: {}
	}

	generateFormItems () {
		const {header, selectedFeature, updateFeature } = this.props;
		return this.props.featureOptions.map( (option , index) => {
			const itemHash = slugify(JSON.stringify(option));
			return <FormSectionItem
			updateFeature={updateFeature}
			key={itemHash}
			id={itemHash}
			featureName={header}
			option={option}
			selected={option.name === selectedFeature.name}
			/>
		});
	}

	render() {
		const { header } = this.props;
		return (
			<fieldset className="feature">
				<legend className="feature__name">
				<h3>{header}</h3>
				</legend>
				{this.generateFormItems()}
			</fieldset>
		);
	}
}

export default FormSection;