module.exports = {

      components: {
      },

      props: [],

      data: function () {
        return {
          projects: [
            {header: 'My Web Page 1', content: 'myWebPage', url: 'https://api.github.com/repos/NickMcSweeney/myWebPage/contents'},
            {header: 'My Web Page 2', content: 'src', url: 'https://api.github.com/repos/NickMcSweeney/myWebPage/contents/src'},
            {header: 'My Web Page 3', content: 'dir', url: 'https://api.github.com/repos/NickMcSweeney/myWebPage/contents/src/app/index-dev.html'},
          ],
          name: "name",
          content: "",
          size: "",
          link: "",
          siblings: [
          ]
        }
      },

      methods: {
        getGitPage: function (src) {
          var xhr = new XMLHttpRequest();
          const that = this;
          xhr.onreadystatechange = function(){
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status < 400) {
                try {
                  var ret = JSON.parse(xhr.responseText);
                  if (ret.content!=null) {
                    // console.log("file", ret)
                    that.content = atob(ret.content);
                    that.name = ret.name;
                    that.link = src+"/"+ret.name;
                    that.siblings.push({name: that.name, link: that.link, content: that.content});
                    console.log(that.content)
                  }
                  else {
                    var i = 0;
                    while (i<ret.length) {
                      // console.log(that)
                      that.name = ret[i].name;
                      that.link = src+"/"+ret[i].name;
                      // if(getGitPage(that.link)){
                      //   that.siblings.push({name: that.name, link: that.link, content: that.content});
                      // }
                      that.siblings.push({name: that.name, link: that.link});
                      console.log("folder")
                      i++;
                    }
                    // console.log(this.name)
                  }
                } catch (err) {
                  console.log("ERROR", err)
                }
              }
            }
          };
          xhr.open("GET", src, true);
          xhr.send(null);
        },
      },

      template: `
        <div>
          <div>
            <tab-list>
              <tab v-for="project in projects" :header="project.header">
                <a @click.prevents="getGitPage(project.url)">{{project.content}}</a>
              </tab>
            </tab-list>
          </div>
          <div v-for="sibling in siblings" >
            <p>{{sibling.name}}</p>
            <textarea>{{sibling.content}}</textarea>
          </div>
        </div>
      `
};
