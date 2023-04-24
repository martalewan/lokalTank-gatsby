import React from 'react'
import { Form } from 'react-bootstrap';
import { LanguagesSelect } from './SelectElements'

const SelectLanguage = ({ toggleLanguage, lang }) => (
	<Form.Select value={lang} onChange={e => toggleLanguage(e.target.value)}>
		<option value="en">ENG</option>
		<option value="pl">POL</option>
		<option value="de">DEU</option>
		<option value="uk">UKR</option>
	</Form.Select>
)

export default SelectLanguage
