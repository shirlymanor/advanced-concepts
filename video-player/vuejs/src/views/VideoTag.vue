<template>
  <div>
    <h3>Video Tag</h3>
    <cld-video cloudName="picturecloud7" width="500" crop="fit" controls muted publicId="rooster">
      <cld-transformation
        overlay="text:arial_100_bold:Rooster"  
        color="yellow"  
        gravity="north_east"
        y="20"
      />
    </cld-video>
  </div>
</template>


<script>
export default {
  name: "VideoTag"
};
</script>

<style>
</style>
