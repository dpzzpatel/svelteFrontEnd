<script>
	import profileImage from '$lib/images/avatar-jessica.jpeg';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
	/>
</svelte:head>
<div class="flex container items-center justify-center bg-offBlack h-screen font-sans">
	<div class="flex flex-col gap-2 items-center justify-center w-80 h-4/5 bg-DarkGrey mx-1">
		<img src={profileImage} class="rounded-full max-w-30 max-h-28 mb-1" alt="Profile Pic" />
		<span class="text-White font-bold text-2xl mt-3 mb-1">Jessica Randall</span>
		<p class="text-sm font-semibold text-Green">London, United Kingdom</p>
		<p class="text-sm"></p>
		<p class="text-White font-normal mt-2">"Front end developer and avid reader"</p>
		<button class="text-white bg-Grey w-4/5 rounded-md mb-1 p-2 hover:bg-Green hover:cursor-black"
			>Github</button
		>
		<button class="text-white bg-Grey w-4/5 rounded-md mb-1 p-2 hover:bg-Green hover:cursor-black"
			>Frontend Mentor</button
		>
		<button class="text-white bg-Grey w-4/5 rounded-md mb-1 p-2 hover:bg-Green hover:cursor-black"
			>LinkedIn</button
		>
		<button class="text-white bg-Grey w-4/5 rounded-md mb-1 p-2 hover:bg-Green hover:cursor-black"
			>Twitter</button
		>
		<button class="text-white bg-Grey w-4/5 rounded-md mb-1 p-2 hover:bg-Green hover:cursor-black"
			>Instagram</button
		>
	</div>
</div>
