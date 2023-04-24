import React from 'react'

const SelectLanguage = ({ toggleLanguage, lang }) => (
	<select value={lang} onChange={e => toggleLanguage(e.target.value)}>
		<option value="en">English</option>
		<option value="pl">Polski</option>
		<option value="de">Deutsch</option>
		<option value="uk">Ukraina</option>
	</select>
)


export default SelectLanguage
