var app = angular.module("jumpPage", []);
app.controller("myCtrl", function ($scope) {
  $scope.jumppage = {
    pageTitle: "Math 1530 Jump Page",
    units: [
      {
        title: "Unit 1",
        sections: [
          {
            title: "Section 1.1",
            links: [
              {
                text: "Statistics Thing 1",
                url: "https://google.com",
                // desc:
                // "Some information and stuff for link 1 in section 1 in unit 1. The next button doesn't have a description",
                icon: "fa-bath"
              },
              {
                text: "Statistics Thing 2",
                url: "https://yahoo.com",
                icon: "fa-camera-retro"
              }
            ]
          },
          {
            title: "Section 1.2",
            links: [
              {
                text: "Statistics Thing 2.1",
                url: "https://google.com",
                icon: "fa-wpexplorer"
              },
              {
                text: "Statistics Thing 2",
                url: "https://yahoo.com",
                desc:
                "Some information and stuff 2 for link 2 in unit 1 and section 2",
                icon: "fa-telegram"
              },
              {
                text: "Statistics Thing 2.1",
                url: "https://google.com",
                desc:
                "Some information and stuff for link 1 in section 2 in unit 1",
                icon: "fa-ravelry"
              },
              {
                text: "Statistics Thing 2",
                url: "https://yahoo.com",
                desc:
                "Some information and stuff 2 for link 2 in unit 1 and section 2",
                icon: "fa-briefcase"
              },
              {
                text: "Statistics Thing 2.1",
                url: "https://google.com",
                desc:
                "Some information and stuff for link 1 in section 2 in unit 1",
                icon: "fa-cogs"
              },
              {
                text: "Statistics Thing 2",
                url: "https://yahoo.com",
                desc:
                "Some information and stuff 2 for link 2 in unit 1 and section 2",
                icon: "fa-database"
              }
            ]
          }
        ]
      },
      {
        title: "Unit 2",
        sections: [{ title: "Section 2.1" },
        {
          title: "Section 2.2",
          links: [
            {
              text: "Statistics Thing 2.1",
              url: "https://google.com",
              icon: "fa-wpexplorer"
            },
            {
              text: "Statistics Thing 2",
              url: "https://yahoo.com",
              desc:
              "Some information and stuff 2 for link 2 in unit 1 and section 2",
              icon: "fa-telegram"
            },
            {
              text: "Statistics Thing 2.1",
              url: "https://google.com",
              desc:
              "Some information and stuff for link 1 in section 2 in unit 1",
              icon: "fa-ravelry"
            },
            {
              text: "Statistics Thing 2",
              url: "https://yahoo.com",
              desc:
              "Some information and stuff 2 for link 2 in unit 1 and section 2",
              icon: "fa-briefcase"
            },
            {
              text: "Statistics Thing 2.1",
              url: "https://google.com",
              desc:
              "Some information and stuff for link 1 in section 2 in unit 1",
              icon: "fa-cogs"
            },
            {
              text: "Statistics Thing 2",
              url: "https://yahoo.com",
              desc:
              "Some information and stuff 2 for link 2 in unit 1 and section 2",
              icon: "fa-database"
            }
          ]
        }]
      },
      {
        title: "Unit 3",
        sections: [{ title: "Section 3.1" }]
      },
      {
        title: "Unit 4",
        sections: [{ title: "Section 4.1" }]
      },
      {
        title: "Unit 5",
        sections: [{
          title: "Section 5.1",
          links: [
            {
              text: "Statistics Thing 1",
              url: "http://https://google.com",
              desc:
              "Some information and stuff ",
              icon: "fa-bath"
            }
          ]
        },]
      }
    ]
  };
});
