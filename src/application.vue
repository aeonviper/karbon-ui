<template>
	<div style="margin:10px;">
		<h1>Karbon version 1.0</h1>
		<v-form>
			<v-text-field
				v-model="text"
				label="Text"
			></v-text-field>
			<div>{{value}}</div>
			<div style="text-align:center;">
				<v-btn large @click="action()">Submit</v-btn>
			</div>
		</v-form>
	</div>
</template>

<style>
::selection {
	background: #65bd0091 !important;
}
* {
	font-family: "Segoe UI", "Source Sans Pro", sans-serif;
}
</style>

<script>
import ajax from "axios";
export default {
	data: () => ({
		text: null,
		value: null
	}),
	computed: {},
	methods: {
		action() {
			let $this = this;
			ajax.post("http://localhost:3000/uppercase", {
				text: $this.text
			})
				.then(response => {
					$this.value = response.data.text;
				})
				.catch(error => {
					console.log(error.response);
				});
		},
	}
};
</script>
