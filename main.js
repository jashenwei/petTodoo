const textPost = document.querySelector(".inputText");
const deletePost = document.querySelectorAll("#deletePost");
const postContainers = document.querySelectorAll(".postContainer");
const donePost = document.querySelectorAll("#donePost");
const postsContainer = document.querySelector(".postsContainer");

textPost.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addPost(e);
  }
});

//Прослушка событий чекай!!!!!!!!!!!!
function addPost() {
  //сделать проверку и ощистку на лишние пробелы!!
  if (textPost.value != "") {
    //создается блок в котором будет находиться текст сообщения
    const post = document.createElement("div");
    post.className = "postContainer";
    document.querySelector(".postsContainer").prepend(post);

    //Начинка
    const postBlock = document.createElement("div");
    post.appendChild(postBlock);
    //
    const postSettings = document.createElement("div");
    postSettings.className = "postSettings";
    post.appendChild(postSettings);

    const postDone = document.createElement("span");
    postDone.id = "donePost";
    postDone.className = "material-icons";
    postDone.innerText = "done";
    postDone.addEventListener("click", () => {
      const parent = postDone.parentElement.parentElement;
      parent.classList.toggle("done");
      const parent2 = postDone.parentElement;
      const spans = parent2.querySelectorAll("span");
      spans.forEach((el) => {
        if (el.id !== "postDelete") {
          el.remove();
        }
      });
      const posts = document.querySelector(".postsContainer");
      posts.append(post);
      console.log();
    });
    postSettings.appendChild(postDone);

    const postEdit = document.createElement("span");
    postEdit.className = "material-icons";
    postEdit.innerText = "edit";
    postSettings.appendChild(postEdit);
    {
      let editMode = false;
      postEdit.addEventListener("click", () => {
        if (editMode) {
          //this.style.color = "black";
          this.textContent = "";
          postBlock.removeAttribute("contentEditable");
        } else {
          this.textContent = "save";

          postBlock.setAttribute("contentEditable", true);
          postBlock.focus();
        }
      });
    }

    const postDelete = document.createElement("span");
    postDelete.id = "postDelete";
    postDelete.className = "material-icons";
    postDelete.innerText = "delete";
    postDelete.addEventListener("click", () => {
      const parent = postDelete.parentElement.parentElement;
      parent.style.transition = "0.6s";
      parent.style.opacity = 0;
      parent.style.marginLeft = "200px";
      setTimeout(() => parent.remove(), 500);
    });
    postSettings.appendChild(postDelete);
    console.log(postBlock);
    postBlock.innerText = textPost.value;
    textPost.value = "";
  }
}
