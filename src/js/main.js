/**
 * Created by NickSp on 15.03.2017.
 */

var numOfBlog = document.querySelector("#right-block");
numOfBlog.addEventListener("click", clickreaction);
function clickreaction(e) {

    console.log(e.path[1].id);
    var blogtitle, blogtext;
    switch (e.path[1].id) {
        case'blogpost0':
            blogtitle = blogs [0][0];
            blogtext = blogs [0][1];
    }
}

var blogs = [];
blogs [0][0]= "Blog1";
blogs [0][1]= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur cumque eius expedita fuga incidunt ipsum laudantium numquam, odit praesentium, quia saepe, sequi sint sit ullam veniam voluptatibus. Aspernatur at dignissimos labore laudantium minima nam, nesciunt nihil optio. Architecto asperiores at consequatur delectus dolores facere facilis fugit inventore itaque magni, molestias mollitia natus non nostrum odit omnis, quibusdam sint unde. Adipisci, animi aspernatur debitis deserunt exercitationem, inventore magni, mollitia nesciunt nulla quo similique sit totam? Corporis ea error id. Adipisci autem expedita fugiat quam quod quos saepe. Modi sequi similique sit vitae voluptatem. Aliquid aperiam culpa cupiditate debitis delectus, eaque eligendi enim eum ex explicabo fugiat illo ipsam ipsum itaque iure maxime molestiae non obcaecati possimus provident quaerat quas, quis ratione sed soluta tempore totam voluptate. A accusantium architecto at aut consequatur corporis cumque dignissimos ea, ipsam laudantium maxime officiis perspiciatis similique sit tempora ullam velit veniam voluptate! Ab adipisci enim, est harum laborum nulla possimus quaerat qui rerum saepe sunt voluptatibus! Aperiam aut deleniti, dolorum et illo molestiae perferendis placeat quasi quisquam recusandae? Ab blanditiis cupiditate dolorum exercitationem expedita illo maxime minus modi obcaecati quasi, quisquam ratione saepe sunt suscipit veritatis! A culpa delectus facere ipsa necessitatibus nobis quas ratione, tempore tenetur vero. Consectetur error nesciunt porro! Eos, maiores, vel. Accusantium assumenda consequatur culpa cupiditate earum hic labore, reprehenderit sint sunt tempore. Ab, animi architecto at commodi consequuntur delectus ducimus eius eligendi eum eveniet laborum laudantium magnam minima necessitatibus numquam odit officiis sint suscipit velit vitae. Accusamus aperiam explicabo harum incidunt ipsam laborum minus nam obcaecati odio officia possimus quos tempore, voluptatum. Assumenda deleniti, dicta doloremque minus perferendis placeat quaerat saepe tenetur totam! Ab accusamus accusantium alias consequatur debitis doloremque doloribus dolorum facilis harum illo ipsa laudantium mollitia non nulla officia perspiciatis possimus ratione reprehenderit rerum tempore, tenetur vero?";
