
import React from 'react';
import { useParams , useNavigate} from "react-router-dom";

export default function CategoryScreen() {
    const { id: productId } = useParams();

  
    console.log("iddddddddddddd", productId)
    return (
        <div className='body'>
           <h1 style={{textAlign:"center"}}>Category screen</h1>
        <p style={{padding:"30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum vitae unde voluptas culpa sit commodi maxime accusantium. Architecto ex quisquam eos tempore id doloremque? Quam, nisi. Autem architecto consequatur eum ipsam velit minima cupiditate et unde, numquam aut, adipisci amet a animi exercitationem eos tempore placeat perferendis atque, omnis voluptates nobis. Consectetur corrupti repellat tenetur, tempora debitis quibusdam rem animi quo unde vitae earum non vero quos ex, aliquid odio molestias labore minima sit quis quam itaque? A assumenda, mollitia voluptatum provident deleniti quia quod, eos quibusdam, harum quidem inventore consequatur magni! Officia enim eos minus minima tenetur voluptas nostrum mollitia vitae eligendi totam cum sequi omnis id dolore maxime placeat aliquid, assumenda beatae? Incidunt sit doloribus quae! Soluta dolore dolor placeat a incidunt, repellat consectetur voluptatem! Quam veniam ratione ipsam qui, a provident inventore obcaecati numquam dolor repellendus beatae quaerat esse nulla tempore excepturi quibusdam aperiam optio? Delectus distinctio illo vitae ipsum mollitia officiis, tempore eius eos fuga ipsam, iure voluptates corrupti nostrum tempora amet nemo maxime minus impedit harum magni officia. Eum quibusdam ipsum repellendus, officiis velit iste dolorem cumque ad quis nobis et eos consequatur minima mollitia consequuntur earum non molestiae voluptatem doloremque. Cupiditate explicabo animi libero, dignissimos, cumque praesentium ullam doloribus ducimus maiores hic commodi, exercitationem esse aliquam excepturi accusantium possimus provident nesciunt minima quaerat enim nulla? Repudiandae, veniam ullam! Veritatis reiciendis non error similique aliquid cumque quos ducimus? Dolorem facilis earum at qui eos reprehenderit illo dignissimos laudantium? Pariatur quod aut quibusdam error odit, rem deserunt velit fugiat blanditiis reprehenderit similique obcaecati consequuntur quaerat nulla tempora. Quod laborum omnis, quo sequi laudantium tempore dolores magnam obcaecati consequuntur earum quidem impedit ratione expedita distinctio illo vel ad quisquam porro perspiciatis, veniam at, modi quis incidunt facere. Repellendus asperiores molestiae rerum odit vitae voluptas possimus doloremque nulla a iure dolores, deserunt ipsam nisi consequuntur, culpa sequi soluta! Eum, modi recusandae! Placeat distinctio ex architecto praesentium ipsa deleniti voluptatum tempore minima quae at, aliquid dignissimos obcaecati, delectus eius eveniet veritatis.</p>
        </div>
    );
}
