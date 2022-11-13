import { Avatar, AvatarGroup } from '@mui/material';
import React from 'react';
function Cast() {
  return (
    <AvatarGroup max={5}>
      <Avatar
        alt="Remy Sharp"
        src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x"
      />
      <Avatar
        alt="Travis Howard"
        src="https://i.pinimg.com/236x/1d/f0/2f/1df02f2cf369e57132e339d8cbf3c4f1.jpg"
      />
      <Avatar
        alt="Cindy Baker"
        src="https://i.pinimg.com/236x/66/af/a9/66afa9bd0a4d23392792c21d8fd444e7.jpg"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://i.pinimg.com/236x/50/45/15/5045151f269d8e02df0c073aa6015ee8.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://in.pinterest.com/pin/864831934667430593/"
      />{' '}
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  );
}

export default Cast;
