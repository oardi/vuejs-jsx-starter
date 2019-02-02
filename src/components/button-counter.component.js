import Vue from 'vue';

export const ButtonCounter = Vue.component('button-counter', {
	props: ['count'],
	render: function (h) {
		return (
			<button type="button" on-click={() => this.$emit('clicked')}>
				click me {this.count}
			</button>
		);
	}
});
