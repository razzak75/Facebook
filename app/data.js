const posts = [
  {
    id: 1,
    Author_name: "Mainul Hasan Sakib",
    time: "14m",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/344812355_772250770916183_3718590588870443913_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG_QgtANNgYKxXWJLYAi4IAl1rfM_5iuPaXWt8z_mK49gBF22ojO3Xsb1Qey89qBU74WKidVs9nmhr-tFyle_Z0&_nc_ohc=RU5OQukCmEUAX_LGNGU&_nc_ht=scontent.fdac144-1.fna&oh=00_AfAVXCe8_hqrXvz6r76nHf11K52e-Hbkqjjfelr5dlPAQQ&oe=64A0CBE5",
    content:
      "Royal District Noakhali, Bangladesh Ancient Island Sandwip,  BangladeshEvergreen Kerala, India Divided by Area, United by Religion.Subcontinental Eid Celebration in UAE.",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/356685585_661830789121640_6686207003190503532_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHhevroVBKs_5_hocGPtsR7AQFUNlTtEUgBAVQ2VO0RSPA8e9mTwL6E4ws_c3j4p-RpW_9l2DmW9u2IapKdIAf5&_nc_ohc=_S-Cg21dlaMAX_SpmZn&_nc_ht=scontent.fdac144-1.fna&oh=00_AfCeUL-r7zaUCHLqcTROWeGYTfJoJr2U8BqvTpprrf_Udg&oe=64A0CE0C",

    like: 200,
    comment: 20,
  },
  {
    id: 2,
    Author_name: "Codemanbd - কোডম্যানবিডি",
    time: "10m",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/355907782_643799644460001_6695357508463252189_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFlSkjzr2axB50KX8PBtmFbrkSugCjssFquRK6AKOywWgWjwhGceIVcmgkjwq_2HXNwotuOwcp-iFtPjkf7bVmP&_nc_ohc=q0dSPAgcDkAAX9q8fB7&_nc_ht=scontent.fdac144-1.fna&oh=00_AfDad1W8vob4hzqfEXRSNp6snz6ijEICxrfnsh3I52EMQw&oe=64A141EB",
    content:
      "৩০ দিন ব্যাপী কোডম্যানবিডি এর ফাইভার ক্র্যাশ প্রোগ্রাম। ক্লাস শুরু হচ্ছে 5th july, 2023 অনলাইন এ স্কিল ডেভেলপমেন্ট করে ইনকাম করুন মার্কেটপ্লেস থেকে ।",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/353656849_636034598569839_6212403488286951712_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGC2laVRiQPC0Gd3hYkMc4JX4LhK0ZGbHNfguErRkZscwE0sNMoJnkjiGEHUVAV7WnmFrT1a4QLDvaseqO4rGmK&_nc_ohc=5H_LAsBeuQoAX8RCj2U&_nc_ht=scontent.fdac144-1.fna&oh=00_AfDTekgl_E6262mKgjuHtXzo7q5XTJKrvcEAyY_Kn_xZpw&oe=64A1996C",

    like: 2 + "K",
    comment: 250,
  },
  {
    id: 3,
    Author_name: "Nafees Salim",
    time: "5d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/271032944_157997519892945_5598972821694241971_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGGeor1jSEcH6KRu0eBKptLHpP5C8FPBY8ek_kLwU8FjzPn5buDX_Hmdqm6x8v3AUl5gV3A3K8EZzVj5w0LLuDQ&_nc_ohc=Q1PPln_5srgAX-82dLU&_nc_ht=scontent.fdac144-1.fna&oh=00_AfCyoIp1HrUsKJEgsjysKMtpXP52TZYZk9YxPet7JajyYA&oe=64A1E777",
    content: "New set. New season. Let's goo!",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/356063589_291739023225090_7561147072149792297_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEpHSvBSXChHogEh-kYYajb0-P6s91K6gvT4_qz3UrqC9DK5amim4F4hYJyQh_ZZaUdaPrmu-tCgEwBOT60ri1_&_nc_ohc=Vnt09HRzXloAX9bHkWH&_nc_ht=scontent.fdac144-1.fna&oh=00_AfAIQoZgTISvJzgP9tS8CBwVLEv76NF0bOhokMbXkPOYLg&oe=64A1C972",

    like: 2.6 + "K",
    comment: 159,
  },
  {
    id: 4,
    Author_name: "Jasper.ai",
    time: "1d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/349065494_139163055826019_7054389154762394801_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHg1h9ntAvYOVz4Ky7kWjx9__XmO3vCArv_9eY7e8ICuxz_OiWhi-Xh-R-pdDf0QBxz4jzs4NkhdFCIu6CgaWHR&_nc_ohc=WrvPbzfu25wAX_HcZZe&_nc_ht=scontent.fdac144-1.fna&oh=00_AfDvFIEIQBh9wFrT2O6tihc3UVlQciQv-zZZi-UGxK9SIQ&oe=64A15E42",
    content:
      "𝐉𝐚𝐬𝐩𝐞𝐫.𝐀𝐢 is an incredibly powerful tool that can help digital marketers to create high-quality content, engage with customers more effectively, gain valuable insights into customer behavior, and save time.",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/356400199_763545502440036_7716998260055544888_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeENZ07ATloBui-qlPf4n-aCQxJyzBwNsqVDEnLMHA2ypdI6OkkCOJLhVLoXBLFUVmUGna1gdbsnaoRRqQ7BM2o1&_nc_ohc=_isaj2V-16UAX-46UZr&_nc_ht=scontent.fdac144-1.fna&oh=00_AfAF31YL972toRGMB3C0_Fg8pM3DSi8vcGuRrKfBBSuXTQ&oe=64A20AD2",

    like: 797,
    comment: 65,
  },
  {
    id: 5,
    Author_name: "Mohammad Ali Nijhoom",
    time: "2d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/305277914_423048573323142_7856087335343026072_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHgpuV0kOz2Tz9NssPAXE0sMbdyu-A2qdAxt3K74Dap0EaEKgh0YpdBZxjgnJfBjI12Sln7KDTsghJAPCfJFSpk&_nc_ohc=KexzhX7NTEkAX8hvXcP&_nc_ht=scontent.fdac144-1.fna&oh=00_AfC4DMPuTbjyEm4SVMxb5OfaJ6EkIv6jCEBEh6uCquteTg&oe=64A050B6",
    content:
      "Congratulations Shemanta Bhowmik ভাই। Upwork এর Domination মাত্র শুরু হলো 🔥, InshaAllah আরো অনেক দূর যেতে হবে ❤️",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/347403428_578166397811358_8899081562260335985_n.jpg?stp=dst-jpg_s640x640&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFWOWru2y-S6OOQxNTVjUxyO_ou2vfwYo47-i7a9_BijtWQin1mtyGQT88v5G56f8cC5-bxsW9LQ5huFfr_bMOv&_nc_ohc=6EIp0IAYHOEAX9Or_ZO&_nc_oc=AQm7eWbhGSUaXJfiqyJN5nmgvWszjFsCRelniSVvb9M78omYejRuT_k4oAfg3wj5DEE&_nc_ht=scontent.fdac144-1.fna&oh=00_AfDPpCqPSXfWiH6xmLsOYRsO70oPK5kU0AoOEYT_sGcVvg&oe=64A06450",

    like: 152,
    comment: 15,
  },
  {
    id: 6,
    Author_name: "RevenueGeeks",
    time: "6d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/309803777_465012908981851_8061664161466174327_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG8RvrzQ630TCv_KVbb3pYMrwDnkSk2adavAOeRKTZp1sjm9kIIp2zDCxCSef5pxNH_07HtjMjrPIgKrFD5lr_4&_nc_ohc=wTxIeBkHU-UAX80nkQy&_nc_ht=scontent.fdac144-1.fna&oh=00_AfBbUaRXIWM6ftvY4AtvkuAnKEGdgWiD5awMNOqzC18SFw&oe=64A12E70",
    content:
      "Save over 60% on the best AMZ FBA tools. Get the deals AMZ providers don't want you to know about.",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t45.1600-4/356297604_23855904591330415_6467572332302773490_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444&_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e84a38&_nc_eui2=AeGmN2agRJ9CpRIF3smOJDz-OfPjv325Ny458-O_fbk3LmF5Kqn1QZ705dQrwOqlNZTRS7ebMP5_auzcFJINkt8Y&_nc_ohc=wsE-lHm-8sAAX8COSWG&_nc_ht=scontent.fdac144-1.fna&oh=00_AfD7M4ih1XHy1lumDhf2scm20oM_t9xW_YufmwZX3uuNQA&oe=64A17547",

    like: 11,
    comment: 2,
  },
  {
    id: 7,
    Author_name: "Eshan Ahmed Ahad",
    time: "6d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/337257622_916553536053550_7938989006139537144_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEveABHSOhoI-DhSNdaoi1vbw0kXGMD1OBvDSRcYwPU4CdLgPudBghzjUZq5bDl4Ff8QxUbw6PCMBO_ZVlRomrM&_nc_ohc=dW0qfNfl-iIAX_xxlqU&_nc_ht=scontent.fdac144-1.fna&oh=00_AfBUtRb2LCMcnLUwtDY-LP8AHqozPYGHFO9UmOGN-OCrGQ&oe=64A06BAB",
    content: "Just Not 10, Also Have Secret 10 Peoples😊. Tonight 8 PM",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/356364215_316465624037797_6456792897725740383_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHuWAmVydBHgpxWkBe_0xBOmgCEpgg7hjyaAISmCDuGPEF4VydA0EX1he3xhAYwJq_GsueCAnckCtCWCAULaZtY&_nc_ohc=vbUXB4E1NeEAX-XIs3Q&_nc_ht=scontent.fdac144-1.fna&oh=00_AfChCe3YgTxwP8RKbVBjWxk0QW8w_QSAjRn0gXgG-xDRtg&oe=64A1A7B8",

    like: 636,
    comment: 46,
  },
  {
    id: 8,
    Author_name: "Dr. Khandaker Abdullah Jahangir Rh.",
    time: "3d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/293061514_575687923925919_3785828658644380010_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGChIYgjmZC-Sp0gBYio0eE-w3Kr7Ral7j7DcqvtFqXuEZBfr6r9P5qGBtfytrPnIIZoNUDf3vvKDS84vAH5NTH&_nc_ohc=jHuRWEIe-wcAX8DusFJ&_nc_ht=scontent.fdac144-1.fna&oh=00_AfB0Et3DhyN6SJ67jVoK7k5xR7A8qaiYOoi5Ew8O0jtEmg&oe=64A08203",
    content:
      "উক্তিঃ ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর রাহিমাহুল্লাহ, বইঃ যুগের মহান দাঈ, লেখকঃ আব্দুর রহমান",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/355483015_801868121307897_8842340717690400711_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFemJWozsojmtmozkiGO6tclkdVYctOjumWR1Vhy06O6YqUITmvoNkOniyYBEMg5HXc4FPtCiUhA7xdahUhpgb6&_nc_ohc=eycBEiI6J_EAX8gHFzZ&_nc_ht=scontent.fdac144-1.fna&oh=00_AfCMmvEDqCXeDPNxMVXJns78iw0ZKFX2D_8gG0cQBHxkFg&oe=64A1D20E",

    like: 13 + "K",
    comment: 342,
  },
  {
    id: 9,
    Author_name: "Md Tasnimul Hassan",
    time: "3d",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/350107804_561759752700337_6467004323596585487_n.jpg?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGgZ2KQzMXcavdYAINX2fBBg_Bz5S_E7pOD8HPlL8Tuk6TzIpjsNubDF3GTlsSXDzohX4hDz2fCft0WMHDNojaX&_nc_ohc=Btw34gX6OkAAX9wkGQ4&_nc_ht=scontent.fdac144-1.fna&oh=00_AfBFwMu0Wfxp4Y7_IX-g5GiEK2STlFM4Nsmn-m6Vl1AJ2g&oe=64A073E1",
    content: "দৈনিক স্বদেশ প্রতিদিন",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/353807435_3415430072056243_7348216735880443413_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFzpOLMZd86_zA7F1QZ6Bsprzt-c_BXIcevO35z8Fchx7piP3YqG4pDwEQ279kTbJMZcsCb_42aSM6wAiH1mSt8&_nc_ohc=qm6QgnX00KsAX9JQrec&_nc_ht=scontent.fdac144-1.fna&oh=00_AfDFae78RMmkIO5wRhHxXsYI3xrAX5eLujALz2d1lUpMMg&oe=64A11E0B",

    like: 8.3 + "K",
    comment: 101,
  },
  {
    id: 10,
    Author_name: "Sumit Saha ",
    time: "18h",
    Author_image:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/353667202_2618415201654207_7496116469740517025_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_eui2=AeH-wl7_qsc7M4Dkz5x8N2d9GiH8vwaxxjIaIfy_BrHGMjcHC_P6sKtZQaHFpF6Gl5wnAZiq5BAyaVaTxYrawhY4&_nc_ohc=DlbjK4qrgOsAX_hPMSZ&_nc_ht=scontent.fdac144-1.fna&oh=00_AfC2o3lypDJazD8p3_XUJW4PeGDcwLSB8gMtFrJqQ4263A&oe=64A1EE8B",
    content:
      "Eid Mubarak to the brilliant Programming Community members of Bangladesh including Learn with Sumit community! 🎉 May your code be bug-free and your algorithms run smoothly as we celebrate this joyous occasion. Wishing you abundant blessings, happiness, and success in all your coding endeavors. Let's continue to learn, grow, and inspire one another. Have a fantastic Eid filled with love, laughter, and delicious code optimizations! ✨🌙",
    content_img:
      "https://scontent.fdac144-1.fna.fbcdn.net/v/t39.30808-6/356233514_2627029740792753_3146370929511265335_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHlcClpHADwXHSrsA3ErHgW-nHpKXOkgPH6cekpc6SA8Y9u0kRNy_o42Rej8B2qp9uVdqqz4rxbOLV5zwMawcVx&_nc_ohc=O1CjC0pxIWYAX-p1zI_&_nc_ht=scontent.fdac144-1.fna&oh=00_AfAbtJg5bP_ZkLNBXVmB3N_pwMQnmKszQGARh24DTv-v8A&oe=64A1471E",

    like: 687,
    comment: 45,
  },
];
