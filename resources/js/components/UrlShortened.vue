
<template>
<form @submit.prevent="submitCreateURL()">
	<div class="row">
	  <div class="col-md-12">
		  <div class="container">
			  <h1>Paste the URL to be shortened</h1>

			  <div class="input-group mb-3">
				  <input type="text" name="longUrl" id="longUrl" class="form-control" v-model="longUrl"  placeholder="Enter the link here">
				  <div class="input-group-append">
					  <button class="btn btn-primary" type="submit">Shorten URL</button>
				  </div>
			  </div>
			  <div class="alert alert-danger" v-if="errorStatus" role="alert">{{errorMessage}}</div>

			  <div v-for="link in links.slice().reverse()">
				  <div class="card">
					  <div class="card-body">
						  <h5 class="card-title">{{link.longUrl}}</h5>
						  <div class="input-group mb-3">
						  <input type="text" class="form-control" v-model="link.shortUrl" v-bind:id="link.idUrlDetails" >
						  <div class="input-group-append">
								<button class="btn btn-primary" v-on:click="copyToUrl(link.idUrlDetails)" type="button">Copy</button>
						  </div>
						</div>
					  </div>
				  </div>
			  </div>

			  <div>
				  
			  </div>
		  </div>
	  </div>
	</div>
</form>
</template>


<script>

import axios from 'axios';

export default {
	name: "UrlShortener",
	data() {
		return {
			links: [],
			errorStatus: false,
			errorMessage: '',
			longUrl: null
		}
	},
  	methods: {
		resetForm() {
			this.errorStatus = false;
			this.longUrl = null;
		},
		checkForm() {      
			if(!this.longUrl){ 
				this.errorStatus = true;
				this.errorMessage = "URL required.";
				return false;
			} 
			if(!this.isValidURL(this.longUrl)) {
				this.errorStatus = true;
				this.errorMessage = "Invalid URL";
				return false;
			}
			if(this.longUrl) return true;
		},
		isValidURL(string) {
			var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
			return (res !== null)
		},
		submitCreateURL() {
			if(this.checkForm()) {
				this.createURL();
			}
		},
		createURL() {
			var submitData = {longUrl: this.longUrl}
			axios.post(this.CURRENT_API + "url_shortener", submitData)
				.then(({ data }) => {
					this.resetForm();
					var orgData = {
					longUrl: data.data.long_url,
					shortUrl: this.CURRENT_URL + data.data.short_url,
					idUrlDetails : data.data.id_url_details
					};
					this.links.push(orgData);   
				})
				.catch(({ response }) => {
					console.log(response);
					this.errorStatus = true;
					this.errorMessage = response.data.data;
				});
		},
		copyToUrl(id) {
			var r = document.createRange();
			r.selectNode(document.getElementById(id));
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(r);
			document.execCommand('copy');
			window.getSelection().removeAllRanges();
		}
  	},
	mounted() {
	},
};
</script>
