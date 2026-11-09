// FOTO DISIMPAN LANGSUNG DI TEKS SCRIPT.JS — TIDAK PERLU FILE GAMBAR TERPISAH
const HERO_NORMAL = "data:image/webp;base64," + [
  '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',
  'AsAAAA=='
].join("");
const HERO_TOUCH = "data:image/webp;base64," + [
  'UklGRiQtAABXRUJQVlA4IBgtAAAwpgGdASqAAoACPsFcpk4qODAyKbUpYwAYCWduzrAX0lu0VwxU4jCM8/dbu4ufVsbLVdPZ0CPPNtlS29P2aD729ZGiju1/',
  'qeuH/ietL/DeoZ+kf6y+/D1N+YP+Y/579y/dA/537me8//geoP/Tv+Z1xH9Y9UL+Jf7T1o/WP/cnJ/J23jP+N45/IX/h/hevr/+a7/T//Tz869POv7JztXWo',
  'iD/af7mDABSMT3mui8Cns67UiQB0gk3PEbCAOHs10XgU6014Lezl4YVI3o3L/6Pm/MrzFIhQbNWfvUDh7NdF4FOvRitb/Bl4Y6IEs1JxZuIWonr4Yb2xFp/x',
  'mz/afwq7d1APwstQqiG2FjXa0XNHhO3iMLRa7gIl4FPZtexWcWjUJQHfaqsXlE62FlGnX3TfP93HSLdVjiKStSJAHRdpwBB0A8n1Ka8J5iTKO5cvDmUz7xcH',
  'WWY9uPmWSaWXzYlavhl1PzJzl4zZ/tP+LWJVbDJGDXZPCHcuXd8Li6lor4r3qKjNIvM8SFXNm5JhmOxxZs3OH+WYf4toUcWzhqsFdoFVkHReBT2bQ6y6gJRL',
  'DmcJ5ou2s/fWe6mG/PZJ+/jOb7RezMWGZVb/lB832MLgU9m17FcV8kvP4GFjWv5W13AlrfvtF7pxGE8kWx3iPfEWYLDHZQJmlC45/ikNYYPZrou33NyqUW10',
  'ficj4bX8ZGrHu/WmKwPn5l/f2WnEe38RmfmlRKwFI1/TbkCWGkj7P9p/uHVEfuG99YLWO5m5lRtoGd7pIkN0nBV9JhvlaJCtQ1X7Lpi0yqymNcrrYC7SiXi6',
  'COBtWX2n/Fsx5fjhONlxVTCyzXcKPTYjEAvWQ+s+CY12LfhNEqxuwf0ka1UhCzPybDwKg44/VvhynLgtGnI3akUJ4ZwPCaJeJ4vAp61XUGZ2FACMVEMfqinn',
  'ULCqM7NEUEGZru3z2VS8SokFGcXt4059dGqWVrBrwAcbLQYppIrrZteqreKuzM47tyMnj+u6kgIejGMVTzghHnT1P1hO3waDjGfcZcas0UIYM78CnsxhxlTZ',
  'qjTBFWf1TOH9JG4Eg1pcUpbCvBMtiz/rMuhnr7pT5QbPP8WZp0JuyMZKcIVmz49FwT4rrZtcwBfP1Gnf9MMcdmnS5PkPcUSKZ2iVK5GFH1oy0EVg/7/unplT',
  'YBBV3V8oqf8GAydW+UonBC64VePyTrj9XmiRxYlxStOP4HDxOKNRJtX/V5JKIGxrsIXUgpuFmj1+GdJHzxLqC1urxYc4OLyd2h4vDJAuI8/28hSZtYGpJba8',
  'w6wimxEA+cm7IwJ8QnDPRtJ2FcYNpDXrfmMvGpva27maTp+P9mBTrDiv4zkzYLNV1UJO0O/paMyaNdwNVKA2rW5WiQthuROdOV4vbwz4eE3SPpWYsonvX3w6',
  'pq1WAnaRDZ6fGThznlPVm4e6XI7QY9nHy3qperOkakCN4zBtXUsG656C1jqx455+uhC4n3g6JBTgDM8T8uZ5XtiTrsg5URVWzaDdC1yPiS0Q9Rp4kfCfL6sR',
  'qeA9fkxlffhgXyRB1fa8iaZvgfM6bLgU9dcwvATXhi1bqiEOLOcAL5WIKj+tXrRJxJ+y20BB99WlkWL2UWf72ONDCXB2BqNCGdoa6HEAISYcQnDNqYNUplBh',
  'QOjFTrovAnXJ2Q7fLolCfJegsW4NidLCCmQZiSkoysZi56FIc2IAwbVerMs4pLv4kqXi7VaKO0EvydFHpqyzZikbZ/tQFpsywmdhnZ7PZufvCKIxRldmhPvK',
  'zQvoLtdSTqx7+Kn+0cj5MVCiMHrSjRiI122OHrDjIlLAuDSSh1mA/d6U9m17FxRU6JtKDGhPXIOZ2IZvIQeIa8vHHY++aqBg6VCfWrMQXp7bWE7djbT/lv0N',
  'DQKkSb94rsjA1kcy4zOvY2z5vWxNmnqsYqAs/tyLji25zu6xMGcVrO23Mj5sYE4q8mWHo1FlA3p44fZShXqaokW2Z17G2gGD2sj16AH7TgT0D0+GZMYeWQBx',
  'Fps+mAsqGTvlJI0fU/p2b+KiKm0EBa4BR5HT7CPskYjP8IC5ETqSybLfej2FY2Bmz/af8W6ZIAZi0iPrxy6YzCMF7YBymVaImiNqT0dfyFgTmfMhlL/e32Hr',
  'r2Se+pQ24Lgf/eaTw8bXsbZ83ndkfmEJ5be8CYoVjegJfFogQldWK87H3fQPLDr4xqNA7DyIGa6n3pscPZrosYGU4/4sX25POyEgoKn9QGVJWExaKbfzAAqL',
  'rfK7myJve+Ux5PeKooSEbwGsNZVcR8Mgtf5e/NQ07KXdIlRSqShkwdXsADz2ZJJ/piV0ufKN/MhP6NiHuMMAjL8tw5tjE+vrtK/MH+VbA2UVvXFhd0/vWOIv',
  '6Z162sBuY5b8uxXjgF6tbbB35vCIGSlzKuFPC2ZpDf46D7SFauB4K1bhZRyy8LZN3WxM6kJyQhvf1CFAb4DSkqs0btrBDiLAgph3CFSwB5PMTP+uGnhhhCqw',
  'ut0spYuSSNlSAc1Rc76wSZJWnOLQG4jq9z2H6laQuFzXUynWYSzScDtHrt3gok+esBiiC5TG5v91MRorhWvOdwyD9s5dWULNO0yZeC7ZIozwB8vrgiPhMCy3',
  'olWbM1BMvmbicPSq1D45sWEUorqaLrRayb23yY2oPdiQ/KfTqW7RCHq//2acAz60SdPYOi22vOziyCMJkkAYz5RGS4M37H9s3W8gQouEmVzGIDBpIFImS6ao',
  'stteyC/DeWMOFDOJT4/2mrkEbk3HaQ0N7ZswujXPBd2XqaFWX2dE4ZCB1b+eCZWyztTMgfU1AF/gb1OxuHyLpgmWEXbxI4IVq3cA9H3/0PkcXlmQCl2nCWqD',
  'M0zJuJ0Ke/vcJWES9PmwAwqln21bQQOwTnCTIyIiv4QfB4+lx/HbqLDpBREoKUngL9DNA4ltD+a+QZGWXXWXYhccM9jO3X9nKmtfpjLHXZwpTf/CF76oXB1V',
  'ftP4HiWyloEgujey4Rck6Kn7dqnBUe5t4N/pAgx3lOJ0nwbOS9HTM4+6qZ1jm41O0fwCxf5kKHVfHZKVfMxO7C47TNGVZZpHKNTw5+rZq3s7zvMgtl4p5LSt',
  'lJNwnOKh8T+hmMwDRpBOSuDf2WJ/GCstLnZaiHDSYcKShkN7jaqyuJXhHSJZfKmLZ0pIh3j/J0Mw5c8r2fJnPyWVQlHg8Uf7YSeab5QzYOIuVk4jx76u9dG6',
  'hPS1vZRywBLEtVxGNZx0oizEXbjztJeezfExPAhnTTxQxnmqDZhTa1P0h4e5dm12IfCgXKCCKyAZHCfCzeHcCKZiMaXtXk46V/Os+DRy0RWvOV0p62yf41Ed',
  'ZgmTKvhHsh5lXfWKuYhDz/PhW73S8ppxVXp9czPW9UHIN2xQ+hXo9sFLyhYes4DhNY/TM3abqej0ZvEqTZkaKkoBjq14L431DQL7UeecUdmFy3Qq9IZ4bb16',
  'gWzPGm2FPwJdE1BLlhI2R530/HehjQ+usAlYUXoyuCVBeFykCGWdyey1X8n0WwbqtbKT6gHcKa4Tba0/Eu0JrXi0M14zsFhSPx69f2XIbyP+BYFlXsoct0L9',
  'b9w2j5LBwbR+fX1qu/zxSLWB3TpHOLxzC9cLkIQXmeBeD0df3cXfLzAHnTj1Qr2ek5ILiUOTwJY+R/sXwWmG8kHk7g+tj3P1/PDABn45m+SncMpm3scksL+A',
  'IlzATA3KWp7WfiYUUStDu+K7G7Zg/a/XDUll9GYhhcJanb+CMGRHVue6pbQzVEoRMw5pAJn3Umt2rqaDKMEwORlDgvavWTtZAqmghl1JB44ohPT3vmqrUMGT',
  '4uZQkGH4hS45ZXGTCJSap2rK8EL9V69c+PEkdxWgAKDEE8LpQ0tcPddgKt4Ecu5Nx8ZFXIpy2VAqbF1eiKFrT/GOYofEC9ywaChNCx/IQ48Cu82R4XnzO5tc',
  'B/nR6L2wJii19+B5eodnvWnvtwF5kzDvbRmnc1kLn7+fulD71TnIgZ0qr/OH0+VKDdpc9FH+F+11VSSnq6H7UOKB9iG5aKLjnodOtErruwn4oSUqQ42t6x61',
  'P+vcXBXmV2K2wszRQjmpVGFVZAJxi7ERflbBdbN0p47S13j75Jr2Db/P+KDYLqccN367s6kqVKYo2su07jq2+jSRGle15S7NCoVNb1JffVh/s5JjIoniqZj6',
  '9sDfs2po2Ui2EFMu5ctJfMYrZGqrBi1Y6t0f4a7OsMHFwpuP2dBxlzQ/ROw+amyR3z6WOm/R6Dj9IoUroB+n6wB0/eBBKfTOXMQ+v/DWrcRptXpORiV3PIXB',
  'XRnbOHmVoGMraxB2VVTV7BdHV7rLXfUQ3mEI14n4Ezae6Z/KTeXXDTq9uqCGGF5FnShLVNyY9R39f063FmthGYb1A21tJXBjYPk+dBeJLQMA7HjJ2lbqf2lc',
  'VJL3ppxuI/sGbU4cRsQlicBdU61lLby/lRn1/EITzS7YiL/y8sk4sxq9IArS+TZ/tr3lFvMBenTLKjFS8tE0ilcirfC16vHVfIqgAAD+/eMAAEvV5zZvKsVN',
  'VhJfxxuKI+cxT/WzZKgFnjwcQVCg4vOVPSomxIPikCWs6MbXdw/mHSxzXBQb4HWTvLgOaSWI14/b30iTo53ESXw7pcucEHFTHA5P3J3Es5AKO0AH3a0avI6G',
  'yGLDbRUlEY5GIKzGCwa1Yi/0cRtQKAF11PDfWk7c/gF9uV+NrBq5geUWFMovnV7CKIjFgn5BikSFssfNLloKhP4bkzyCrBQAAAATCodHCCm0/nuqkcpooP7q',
  'K5reQX21iU3qSKWGxf8FVGn/4jZ8qhF2kSqI3qQfj5onWYIV6lnBPfTHI5f+QAAACbScl/jlHJNlC++XqeWjjD/1h4t+p75+TzEvI09SdSs46BNTAcZQ6h+7',
  'ocMhKyAiQjVhxbbb4uKTjL8ns1Rb1L522gWz5yCy22LAAAAvM/l0M7VXETnvgeJNhOz+B6m7lgNRo0oDFFluMyTkVe4W4T0MaO93/S2KM8oYhDJARQOwpmPn',
  'xaBY22yxO+K9nc3ETRVN5DaNXTJipQATJinYI+INahZgAAA3igCi2yaX2Ua+VmMt4c65+1K7kVvSVTIb3Dok8v8bnJ9WuLsBXpK40Zjb/whh4il2RYIhT4NU',
  'XJpHxSlKPNlAkNBXB5g0Qs9ZSuXtvPnn/PvmU8go54DN/dCIKGPs7CsDaHr9vGgJjGdlZHUi6VCtVoKQTREQsAAAO5OGefqXSaVaCGxYShtGmjOr+XjBRG0Z',
  'isUcRaG3aCxArWV3RPGFsofzA/+kq6XB9Sg+dSHLHRxBU1zW8VMHrZzJQDZ/65zmVEGEYIp2r0A0sjd99fUdEGJfyIFA1Des/S0DhfwWvAh04KQpGP9/DJL4',
  'OdjUJ2cCfvxZpJsbpv0tU7QAAFN35iJdqJXzuqbdKd/VPNkMYgUy1dwvJRzWdKjh8y2eVUHRkMkvPRzXHQ+G1EdUXZf0a7wU3eypPLHWkFUCVJpYmvcRC4oY',
  'vTFB0J1qNijPipwaSmzar1SumHmxeBt5LEdMySGNtgUTN4YVp0wzPh/kyuiJ0HMS0iIAAFfBhrlcZhf4wNoq3m7dEuDaN74yoX5FDeZjfpmVbOhx2eMW3EaP',
  'SHblOLePUpuAZDpGoucQKc/o3vwUSydrVz+of7lmXHhzSkAUCv4X99W1geT2XV2wj2s0tkkuj5CyAyHj61dDPLxxtC5QAAM1DAMJLomxHsc+IenTSK4N5YC3',
  'dynn0Xiw0PFrzQD2gd7Zdpn+f+QSgBot/yMfmcoCFFlF4P8FImOkISQVaDag146F9TEMW27GD8/P0qkNc2gw87rbUhCZ/Uof+0pCkWXeHFL6EpaeooFMmCfX',
  'cd4zpHdk0wjGUjeQAAgaE5oLAlbMQoT3txvBT7r0DAAzsbOFh9jp9FNAUnaayuwnojuvfILpKGc++lNf+d3Yi7kjk+OllPR2Ir8NXRXzpr3sxjtI/Ag771qg',
  'KDQm7EUIR6qNwT4b7BaNQUOh1mqfP9oyjKp165YbPenUV/ENBLEsOELMcjLxfpDTJgAEyy+rYgolrU0mv+534BrgCjcfPA0/+2moqFt9iFOqS+Brkz6vUPGv',
  'YSeBmZ6r/+AyKQeZm7dm3R1tQTHtc0NKfD7MOVK7yWiphDF9U7HWUWygtZPacNZewM5debo0VeOg1pgZTgsS4gBJwyJNw5terlwLDjwR+04Y+0oqTz0J5lzQ',
  'Blm57T52utZ1IAjbX2eYxSwpYyboAoDYPIFetYc1nmwqSv6wgZozOXXCpEusGShFN1rn7KSE3kzmPGQcGIGC3X750CBGvwpTDrkYu7MbIqOu3GksJXlF1O3h',
  'QrPWk92/cQZ53aVzecnHFpbMQ91WBHO4fUwEjXsJqELFKyvKkdSFtrr/gRDk1EckwtX/Ps8eRCmMtvQuaMABOqJcguqQz1W6ZZl4niYEgpMRvBa0iHRQOXJ9',
  'P2i90q7Rfg0bVbYfoIta5Bw0ln1AQFO9KCblnvN6nqYidqpEQzYjkXCk4p89rMgCpqDOl2Hj0c9MpMQAKNc1YmO6hukg3vx4ofQ1oACf0JirEssNZmitI2Cw',
  'I0gaV/R7at+tfR8dfS0XytvEV+QBxPeK5sJqJ+jVguC7L4WeJMRTnTTpqUmCwyi6I7LH9fhepq2fy13Lh7SEl0HiU0og/hn2dPqfKP8ATeGEl+OTkbHK8LBD',
  'CaVJ/OwAi3sz+AlVyESxSdzmP1+1Ua4dHzYx+bvwDiRDdfMEYhjyj4nBWnWKn+5aM0emvn04bV+QDE0mregaktmLHfBudRaTzVS3An22Fp/iTpAN/7THZO7H',
  '6Lf9rgCZsQ1rh5rnEY+ioo8Hq0U4f8el4LFAg5PV4lG8DplKz0TG/nPlZWNzzItCT8dHkbXmbNEmoK7NxMHjRkb+asApE84JJ8fZHEVRpIoQUqtjG+Sm8DOk',
  'lVIoQb9obzpT2SyoGZ+Bgi6+/z5sMePuI7Px8BmbqqZ7D4mPlN/TLmWetJomFZrmvVZXGIbUAS7owDTGfrjg12A4s/T8p2PpracqrasAJmXJEvs5l4z0osGJ',
  'Pu0YymtnoBzqwbizxMbweGjfo7oXNEqP9Qn6zXWyrvlTdAPOnUEAy3X9GmqTxgtlRJ124U/pj67sFE/xdUH/7fHSi+R0xUjA63I17rx8mBVHiuPAGsCqN4RI',
  'ePTuUdsQyH9F/JidCpjJwDd5y1lafLuBofGbuf5wt7uBOWaBYpWV0RnGj/KFXa1D46ruEeA6GtlWqp31AS9932w4pwJT8E/WAf/7N0fokas2VaNcSQursAej',
  'Iewx/8ZyKqGob7mWqE+jYviz9cnH8XBoobUWsUD9VakrBMxu1IxsOKfjwssqBuc1+qDEdtezauu6gszo+JhH6Lp8rj0Y1YIP+4Yww+tygABAmkkBP26SCqNS',
  'FXIUr7PQkP9Hf3TgAHJ0ZW11B45lhbNHygso/kN33XIKRYcP0JgVfHRAvIXKK8+W8qqb7zqRy7sCgX03KJBOoAb7MgfOmtrIaeU+VrDeFwO7/pO8NaFbUKdl',
  'fXX5M6Od/E11l4g5k4FM8iz/hWOsnNaFfO4e6WvORMYS0nZF+JF6SO1dYmaKB+lBwNxLe/m2eDrNgOudqPqaEsZU0lC34Mzz3f9vhvrkYDV7KFjGyVAze0xq',
  '7SL1edIcBdUJCM1jpIt2ssOnj7sM8na2Fn/g38ybA8q3NectU8uBcuVv58xQzsa/djrAG649H1Yp4qJc4nAukn6dLWZ8nYTAFZRp58gGDpBq0asMFpjxeZ4l',
  'OA9mKxi1/GC8wV22ziO6uJoIBzYS/TXFwlQG2aPFpgXd0P/iZmOPpzFFt/q+U+GjPtb80acggmhRxZJS+ZYBykUMNxQ6JoU7zMKa2DTmSei+vxUNE+zxnxb1',
  'GP4sVdMKVxOmQHawg84mlhA+XR3cwyG6z0rpYD8nNU0Bq+aywOw6ez8X/kvL/c6mITzR/kEKMFAEp4iIL6uLfHu7wQEm45wSz0GJImFfXPa2yYvf5fgm70r4',
  '+zXcayFPvjIThdSTDSju5es9032FGrz3JXmWqvjop80MrgXw/ix6UVSEy9B9GDWPSf8osTlhjBRwCevwGi2e4Zbcv31lzBUzPVWn1Gq/ckKnRn4gi1MvYWPp',
  'LRCl1S20/A9OtG89HJi9jKYO1qC7qOKJi4vhDC0xX6DX9XE5Nhtm7h26rD7MrWKgc19UBQxSI7GTscYrl5xPhqXq41Fd4N8Dfb+iIQA6kgZNApayonWL2IkI',
  'H6/ej2eybY0QYAe54c690k6HDV9JYkBLrxOL74skEp/sRjARm0xbchJ7FQMLAJli/C/BD70QEtQcOEGCV+1qCBFRvK6ayJyIMOegBbsqaV9kwHD4VKI3jv10',
  'ZusMjM4CifzeR179gHc1OKUxVEIsIObzq5PuLHHFBC2/ORhzI3VE6C7XQ5bJ2vxKOHNkES+ovdq0Cmevsj+Y7rK0O8hkfXRSQ6VTum8Xg+r0SsGuq4Nf4UkT',
  'QhxswGErp9nDR+MbFG5aN6aIr/lcMkLeBk/ATbrAXxrGWxH8mZqW+MWK2JhrZCu4c6OUBbxsJV2s+dhLUyVFXL5yuitFQPPc//Y6P6H4myUr2BT5wilSgLTO',
  'yAAfIjYmzWrMQB1CuLnT4grrlZowknfKHCw5LLEjS9VjV7KBoYR8ch/4QkCyvMFkSNg2f47z6ARcNO7eEtV8o25AAbeYpshI7zhLcBE0eu6asKuTB78BBOZs',
  'r0PpvvxEcfpeMapeic0RuxUDFwgmBl7t41T62H2QlkPfRVA4U/0ID+HSccTeWDB12GXRgdBlOtD/VsQ+Gkt6YqVlJ4R7jQkGWlUoZuVCtODvkKdRQwRjnvKJ',
  'BPqDebBoTFSZElA3SaZ9I8gAKrT2rqjdk94tId1ICfJDwRr8zXeCN2hFR/SOd8kuqBP9xSK3+Cg+s3leEVE9i6fjkkM9WLtI4J/uWRVPLZnF7z0Tp9qrj+li',
  'oTGJ0SIrvwn9K4jqNwiQ5MaNWhcRABmZ8vzvph+FmDtNrT4ZyrzsVZ4efr0ZFNSqYTm4mfoDHDSZIQAzy3ArV3FDA41qo6bqZ8Xt/fsi2mChiJMWxlSrF1jx',
  'Dgu28y8Re64jcvM5GYL76gAAAHHzjyWHx/YzUtEFH5RpMyA8zZrG+leu9YZI7Gd2dJGbfSMNXs+0MLlRjqLbFpzljkZ8O8MuJtErntZgB5cWutvURwitbh3G',
  'mMj7yIl5j7l7bk+35OKO9Jn1NlPH/0qpUf/cYPRplPqugZO7OGM4HG+FbNiCWw5IsuHBkrzjBCjx7jYxrh6tHXAAAAAdY7AmWWTL6tGzjNG5riWdz0W8kPBo',
  'bDJGPOJzDXnHMavtjElJBetQZCegQJJaH3C0fSDqkg7ZGnoeiOzwE2q1+7tKSHx8BKyQ8laur1O0D1N5jfHBf/3clxOWdVeU8gOYwwGWqr7WxCiDnqo1WvPx',
  '3+FRw5gGnpDXk+tKf/tN/em3aqZl17Iwr/AB1RVLStnwGNcghJVSeyO6B0OVM0fHD7HCO5zl2acYKQtQ57p/0SqSCvHzw2Ai7o3XIIaHPdaRFq7lDmpFtV4Z',
  'vRBdZz65xcd6AAAAA1QPNodEaVKnFXCW3kKqlfc6bh69sHtZOxETDJJ/uppIT791hjS7nnsMUm4bnmnAc4VTG5vjHkRnroW0bUrgDb8FRXZwSIM0KLJErkTA',
  '9gFZiUbRiDkwwy8XIEZOxlYI7/d3UbMiBMNyR6yVqn8Amz4hTQ1AH4Z8BjeahkRSMf/8U0hgs4cXVIQ/GZXcyRcVGnqDYf96HeBRINpls9wpGnSviS1OmAWg',
  'js5zb/QKU5A/K3aT29Crrfw+/lSp7aiPngAAAAInZDTp0s7AAcUGr8J190XuIxH75L0MQkdLpIBgwiRQ5vkriG4Y/qSx96dCf9ronr0FylAH9tLgSP+VQqNf',
  'EVP4LBEaCQ+zNkL4hHogK3TIIOhXWg8ZfnU1Y82W9ymVV4NSIE+i8Beltxc3Uxb/cMNB1YJ9rw8J43nkgOantLWjfwwHeb1jIk9cqAQvA8y/qgXSvjF9Sptd',
  'AAAACu6VcgA6k0dpONHaBlvFp/ezFy2GgURnt+pQN6C6wzjNXg9Xrl5Hs+mfah6HIpHso8OK7SfNTZrdONDqfb1IP3YvaIM0Zw++eBmPxodh8hhPaplhHnQf',
  'ZKa3vbJwljRXs/ntkz292QpIjprnOOu9hzCsW+Lc+F330Ur/oLz+je+yl9IAkKrf5i9xfugfjQ20tRnfwl3NzGPPFS/7bG5oyKsIg2nkdqiq7BDS9JCvkYWa',
  'nDmicGtMgsuGXHAcJ6FC9uki9QwwKD3cvAouvOSWG9RLaiyu7Pw/gWk2yl/p7S9k8z0dTxQHbrJSz0ErrX8DiR+UpoOxBo/dX8n0Yac0TT9uTOK0F7wBl5xK',
  'r7wAOk8YXSpRf81L+gg7Xf3YwEaZ2n5zw3Ixn7XZ2xLV7MiO2cP8WLGjmzz0QtO8OEslq1yw59IHEBPfiwV2iitq3RsuDeWJb4/wnAq5WCaDFPQkfusesRi0',
  'RonwPbxqbgNeOhC0d88ivv9EvOuBnguTK788iwAACPfD8FZzYBF9OFLpMJo1NEX3CoUHzx4hu20dL0zEto2wkgmImaPZ4VA2bwHrUPCpGx4lb1qniyqvNCFB',
  'DhCYpoBV8povrI7NUwLaaR/vU3aDgXqwNN2O6zi/Q/TRFYZRoXb7o/V38+gLeoPzmD00lPzTI4cvsUrvmfLvVGilWcCya2Gh9B8+czxBP1eR1JZ4Rg3Dj7d3',
  'RkQw65hYDLnyrQ1K9t44FQAAw6U76lGufIIrl2OkM5SMWhloGMRoVo+tBmpRlIEyweMJxhKy9YiwqYyZ/JglHRwMeqGBNbPiXRp8AGJdAcDaXXmElOLKgI6+',
  'AxDXmRw79DNJCioriTlFIA4fJzPmXdSwzyYEVV491PJWU8pIh5uO/VNNxD0wsk6SaRsBEaJjkMWBAJQiiEIVtYElTdOZaM5Zm19UyCzh6WTAkIcL35vxTaiY',
  'ervVHHFvMNT8h+qQRQOBu2lmaVz+W52f9D9uS6VxtEIg8hLeUmQAABqNkrDQNvfbJ7pDPottcd0c+doX2dKh39B8Cgod7yzyVt901FSjDIHXApOlM0mArjW6',
  'jm0Z8eiv0q7DrH4iSHUN5sfAEBktR/5ZaT1EfYyeh9GobcnrMXlRJjyYk54NLfXLdCaRMWqToDE44wk5QuSffOuZKM1y0dGRZPZcf+SnKkB4wkKTda/Mhv3B',
  '1bmpuu6OfZoF2Y+KHoZ7wA8TFS9+eLMe+Kr7wga6JyQ6nC9SGoWe0tDpaAbAjat7M1GMtC/dF722kLNf4lYxG1u5PamQESw3HRU34153zXVszZj6x8s80RWR',
  'JC/t7zDN0C5H5LPwwlreGcaBkJBnvDO3G1tYlDJ7ncj9YJC4XjS3iK8n4J3SbSSxosc+7R4abAy6S9g9pEjQ7dOUf0pV/7KM4RBnUItFE1ASyuJKlpi+q7bK',
  'ixLlMGUuktMNJk1uCNL3mIXd/0AAj+JWuqeI578uAM5Xfk6cjL3OKsfjuahinDG/3ydqBXEfQBws4UN4sCA2OKHppmfknYlypTKGhs+t0nbyPkMyih/pKUQY',
  '/aSbgGIHzzilUfh9UF5gWYUfif+lpVYatRuyWVXgUmLnIgEFbAY0WHsoxemqUk0U5tsL5b94LSXhVGMDo9LYcQUOW1V1j1tFS+s3Iy+06de9fRsUvOANSTGa',
  'QSAuvL9ILU8NJJE46Nn3nY3ZQxchCkS1A69uU9SjOPtGMrA+TOMg/QqqnPI5Fq818ihKcd8jaSfrpx4WfADeIlSV2lyKSdh5eEoR3h1HI8DFQK0gLRgWS7AO',
  'taCMNj8ARI0rqJceVcmvFk28QNSLxlYyleK5rDDC/TXvq6sUj/c5lnaxca1BS8TPjPQuPNZiAodUZVrxeuLkI5eM9WDSqRrLeWsfu6NkOTsnTpQhL3PAK4CZ',
  'zLs6a9lqsym6GCRz/UZiv/8MO22jtu7SBv/dUEoNNm6CdE7EQgj6cdj7O66/50q9S8ep1pcP0g+uxhS1LdneSMfGtcZKufB4RI87bboThG8Q4SzXm7hbeEO6',
  'xicxfaFsMDuUH+PaB9al7vUQDAZaYY/KEQAl3NH8O76xfwG8sLRPMGztvE9BNebuMxdgiwJ1qpdOQW1+DVncIiKf2WDw6Nm5lfgxO+m3Wg9TLj6Gb5aJ172p',
  '8L4CAdviYHkGfhtgG6VkncLjd3nj6dTGSc8d9/5BQNPCOcsisSrtqx1cRfOTwxKe9CIZj3KheSiGkKsfwBQKa+HIUBmxHqC2Ks4vJYyoD/XeqiRjIuiW38SM',
  'V6Ur7HzhcuovnEfnedjzZQ1Nck5dBexaxDccxstqyBzyfo1NeMRifCr9gtZA9wl+Ncr0xzaWDbTyKiRhFrHG2/gY+Am33JAAhSBZKqr3aHXNv3Dh3lmCS47/',
  'Whb0fFry1Vsbk53CgRyXjvkdhnM/45eD3sLtSwmCnC/9orq0zs4Rjnc3QHevxpGewWWCOmn1asxT44mtY5qPtkp/3vyjBYjTRUHmENEpWpZXKk4Hznva0l+N',
  'H1hTcaVgSy23/vku/dcRAULGUUKDuHqwrBVDTmeS4noqqncxQHTYTMXyFkj80UnT45SPn6B++0RYiKpBGHnsF+OhNLGGduQf/6lQMJbudX66zx0uxLWeRfCd',
  'RSq2NUrglV5uRWnK9g69Cye5InDSXD7MJqgfP8/he6dzP7KHRDpXMg0XQJXJkeOlyERLSHbJaqtxvpAqx8ZSAVJSi9VHaTsNht1APmp+1fZSLsL+hPbN0cke',
  'tTO7PNQs4Q+QWXodqJKMIHJg1mJ25/sLV/HMDxrpVtkGgcMBl/DSjdb4liA5j2r/9+gH9SaARNw4PPUzOapQvdDP0YA7ix30RhbcpfMTjG7VP2yFiqvMQ+oy',
  'lS8QpSM9f+6DZtpHQjLXVgWsOEfIcjYVhJK/SFP6dSoM8UIYp1soQwgWJfv19QdCbtdBAvhRKVThtrzou9fd52Dj9Xq/FjvrrLqvOXUPWF808JMe6e8LZNW3',
  'V90YFu+8RopucFEDY1/biHnOqFx/YlqxfJ+e7TzCno1R0GYPyKOnMJwdRvW4L0QNbgvCMMhxQoc2DTtZbuxlRJGnBdqP0pisYnjTjYoZWV0MSzUPskpTtfhJ',
  'abruZ1+unHGWAQnOzAt/KQkSk1N+9vQMCVG8krt2pHrI80HLSm8vjOFLpjXLOIfO5vPC8xaPESR6tFg2d9NN5PVMv+eAK+L5toMhaufrmnyCGW5oykIaU/l9',
  'bez5GrTxOpvOStPCJEjoaY/ikxQ6YKs35T2P85kGgGgmSw7sBzJH2NV1x6KXhqkayhywNDevkarIfloY3L4UcfkX2tn+SjRADbu5eTzb9KKcZMhGtbf4+cX/',
  '68f9oqIJwsYh6cup7fgm+FOOufxTapxjiRH4ctT0mSHWhP2uf22BDEQhENmOMDAVCM+5sn/bq1gqUQDhpHPnYj3CUqZ9/g3I6/S8ADVPprsADQOAsKp1Fl1e',
  'Nr2vWvM18G9zjWBl/J9ZP7czvBExRmRlsx+U0Q2i/F5OxvKlALHyZQC62/Jc491v6Up3LHlwol/tdSgE9R8ymPlI5rE+qw6/sAgnIl10FYudja+tNiNaSMLW',
  'Sjrm0V301E2dTq7bOEakMTXin1j4ybgbvJLUb2IakvkWcc6sYKet1Z4Kr9RZbAb6p6S+ukPEdKLgj8ZEqEV/sXmAHO7Ds+VyfX9R5IF42JLPJDEgWpcV6ZgS',
  'q+h403nQzKasHV7Ue5c0U8Gd7hhWf7GO8WxXVCSZwSY/XOqgXr1p1SL/B1uYQ1ujFvs5u6URvKa7OEpdpfI9wHflFthHmR0uPAP1mlv/L48ghjLhKan85Gt9',
  'HeacPkgrDDuZTTJpoMacPd29RXpSxxEDQ4MJhIxLSZPcppafY668FjmTEFitDp2ocB6uuk5Tl7h7Oc6T2mbSjk9wXfZkMfoXaIjWxCvUPDgKqj7FaZ96f342',
  'UrSmemsjHDez8f3oQIO2/dWWaiGZrSMiplqAmCmvo2+AUgKnERdaWenMXd6j/1cpCejJlqoxkig7iA3xg8eNHM3+RglqO1YmNrRKSUo3s6f/HGDrJggwnL5m',
  'Mek2YJvAZp8MTnm7pJvFBcBGe/3T+Wc/9Cj/51EYnA3m0xd9D/gGoQ1QeltZBOcfCcD7kXIBrofQ86zzvpS26XSn281NFqVf/EtNXoaMk8wotuuOJAG476W8',
  '4hiZWaDOvvp//lMoCa70PHhUOl3Q9FH8471TQD3dEb2Bi+GhUVeOLTJpgUrY3rjleqXqCx+HF3NH2JJ0q5FiZzSao8NPLUlFo4EpOH6JA+GXmztKOH/nPgWV',
  'WBSP/B4wdtFPFIjo4IEYMUz45rwkswHM6vNpJ6vQ83sI37PE8wHOXDRLYTAjZPOdHnm2x9Fxb+SNI36qMoWKJXax2mNt8coz6Bknj3EBVj4A+Fak5/OpBO2C',
  'uPWBYt+9HzragbJ0Ayv7YCFiPEWUOGv9MkTXE+HmqBuEATb+W+crHIK/4M9lRUAYPwWV2Mv2MaY5Nd8AKVzai6ubqzqyNIIcdyGU4k+So6pg0nb67XLdL43V',
  '1pjGxmue4XgvPcMAMc7TJWVtDMJXknNdz1SM1eXdtoIpPzMr/7GKjxp+39hedvpzdEVySSQrk/joKX70hI35ECYyZ/CSbCzvGF/Su3UBVWEXCWaPt4vasRmQ',
  '8Grmwy0rSgXZHSz+E8G2sX7SRLbWjdbIXB3pX0JTvrTtg7i3Qr1snUiq+MBiEIQ8NMH2KfICsqg8/8UjMRphWnoACPint/tl/QcYXyiPaUueBVfvFE5M/45T',
  'Wc/PMKxof3gXz3jpH7TxnNXbccuNRDi6AqKPyIS01QQzHkdFnjuRpSgKnqqrINPBeohQ7tv4hcnHxxMYtQa7LQZ4c91xci3c7PyzqCHah/cb1pG6wXgO4qfY',
  'lRG9eyjwjW+84lZBWUmOukCDrrx7/coa+xu2OSbC++Wj6iEnjS28QzK3njeFoigG8ydAKIKjWRvr+x+QpY7rmnUU71wBLobH84N959DpocC0lgT1uX+fHDvd',
  'v/TR50HfkWm0FEhX0ifLHYBafo7zvG0vYdXOQQMYEnlO/4/+cgTurKop2cK+u80TUK2CABGpPecDD8gBdF3fc4QMXND3wlEAgs03RO/Z0XH2OxFfWBoZV5hp',
  'Ziv3RU7ZDJ1DKuYRZzydZrkwcwhOPEzeuePyarNTIoBpO1kfb+KPhWBSatO4d+kkmnYXtveTqE+FYZKCEXc534V7yQ/sO0ZM6tBzV5g+LZ0JZdYL8A8gyv/6',
  '+Jo6LddLJ4sb+O14J83xSKmqigyRWvVzXGUgvpdo2KK5lfCwL/xNFJYAAAA='
].join("");

const defaults={
 name:"Daffa Ubaydillah",tag:"Kreator • Pelajar • Freelancer",
 about:"Halo, saya Daffa Ubaydillah. Selamat datang di portfolio pribadi saya. Di sini kamu bisa mengenal saya, melihat foto, menemukan tautan penting, dan menjelajahi proyek yang pernah saya buat.",
 heroImage:HERO_NORMAL,
 links:[{title:"YouTube",desc:"Ikuti aktivitas saya",url:"https://youtube.com/@KINGDAFFZ-n3x",symbol:"◎"},{title:"TikTok",desc:"Video dan konten saya",url:"https://www.tiktok.com/@daffaubaydillah95",symbol:"♪"},{title:"WhatsApp",desc:"Hubungi saya",url:"https://wa.me/6285151833180",symbol:"✆"}],
 photos:["images/galeri-1.jpg","images/galeri-2.jpg","images/galeri-3.jpg"],
 projects:[{title:"Belajar SI",desc:"Proyek website pembelajaran Sistem Informasi.",category:"WEB",image:"images/proyek-1.jpg",url:"https://belajar-si.onrender.com"},{title:"My Life Dafzz",desc:"Website personal tentang kehidupan dan aktivitas saya.",category:"PERSONAL",image:"images/proyek-2.jpg",url:"https://my-life-dafzz.onrender.com"},{title:"Hollow Dafzz",
desc:"Proyek kreatif digital karya saya.",category:"CREATIVE",image:"images/proyek-3.jpg",url:"https://hollow-dafzz.onrender.com"}]
};
let data;try{data=Object.assign(JSON.parse(JSON.stringify(defaults)),JSON.parse(localStorage.getItem('myPortfolio')||'{}'))}catch(e){data=JSON.parse(JSON.stringify(defaults))}
const $=s=>document.querySelector(s);let current='';
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(s){let t=$('#toast');t.textContent=s;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
function persist(msg='Perubahan berhasil disimpan di perangkat ini.'){try{localStorage.setItem('myPortfolio',JSON.stringify(data));render();toast(msg)}catch(e){toast('Penyimpanan penuh. Kurangi ukuran/jumlah foto lalu coba lagi.')}}
function render(){
 $('#heroName').textContent=data.name;$('#aboutName').textContent=data.name;$('#heroTag').textContent=data.tag;$('#aboutText').textContent=data.about;$('#heroImage').src=(data.heroImage && data.heroImage!=='images/hero.jpg')?data.heroImage:HERO_NORMAL;const touchImg=$('#heroTouchImage');if(touchImg)touchImg.src=HERO_TOUCH;$('#year').textContent=new Date().getFullYear();
 $('#linkList').innerHTML=(data.links||[]).map(x=>`<a class="link-card" href="${safe(x.url)}" target="_blank" rel="noopener"><span class="symbol">${safe(x.symbol||'↗')}</span><span class="arrow">↗</span><h3>${safe(x.title)}</h3><p>${safe(x.desc)}</p></a>`).join('');
 $('#photoList').innerHTML=(data.photos||[]).map((x,i)=>`<button type="button" class="photo-card" data-view-image="${i}" aria-label="Lihat foto ${i+1}"><img src="${safe(x)}" alt="Foto ${i+1}" loading="lazy"><span class="photo-hint">Lihat foto ↗</span></button>`).join('');
 $('#projectList').innerHTML=(data.projects||[]).map(x=>`<a class="project-card" href="${safe(x.url||'#')}" target="_blank" rel="noopener"><img src="${safe(x.image)}" alt="${safe(x.title)}" loading="lazy"><div class="project-info"><small>${safe(x.category)}</small><h3>${safe(x.title)}</h3><p>${safe(x.desc)}</p></div></a>`).join('');
}
function field(label,value,key,type='text'){return `<div class="field"><label>${label}</label><input type="${type}" data-key="${key}" value="${safe(value||'')}"></div>`}
function area(label,value,key){return `<div class="field"><label>${label}</label><textarea data-key="${key}">${safe(value||'')}</textarea></div>`}
function imageOptions(){return `<div class="editor-tools"><div class="field"><label>Potong / sesuaikan foto</label><select id="cropMode"><option value="contain">Asli (tanpa potong)</option><option value="square">Kotak 1:1</option><option value="portrait">Potret 4:5</option><option value="wide">Lebar 16:9</option></select></div><div class="field"><label>
<input type="checkbox" id="removeBg"> Hapus background polos (hasil terbaik untuk latar satu warna)</label></div><div class="field"><label>Tingkat hapus background: <span id="tolLabel">35</span></label><input id="bgTolerance" type="range" min="10" max="100" value="35"></div>
<small>Foto akan otomatis diperkecil agar tidak terlalu berat. Untuk hapus background AI yang rumit, gunakan gambar PNG transparan.</small></div>`}
function itemEditor(arr,type){
 return arr.map((x,i)=>{
  const content=type==='links'
   ? field('Nama link',x.title,'title')+field('Deskripsi',x.desc,'desc')+field('Alamat link (URL)',x.url,'url')+field('Simbol',x.symbol,'symbol')
   : type==='projects'
    ? field('Nama proyek',x.title,'title')+field('Kategori',x.category,'category')+area('Deskripsi',x.desc,'desc')+field('Link proyek',x.url,'url')+field('URL gambar',x.image,'image')+`<div class="field"><label>Atau unggah gambar proyek</label><input type="file" accept="image/*" class="project-file" data-project-file="${i}"></div>`
    : `${field('URL foto',x,'photo')}<div class="field"><label>Ganti foto dari galeri</label><input type="file" accept="image/*" class="replace-photo" data-photo-file="${i}"></div>`;
  return `<div class="editor-item" data-index="${i}">${content}<div class="item-actions"><button type="button" class="move-up" ${i===0?'disabled':''}>↑ Naik</button><button type="button" class="move-down" ${i===arr.length-1?'disabled':''}>↓ Turun</button><button type="button" class="remove-item">Hapus</button></div></div>`;
 }).join('');
}
function openEditor(type){current=type;let html='',title='';
 if(type==='profile'){title='Edit Profil';html=field('Nama kamu',data.name,'name')+field('Tulisan singkat',data.tag,'tag')+area('Tentang saya',data.about,'about')+`<div class="field"><label>Foto utama bawaan sudah tertanam di script. Kamu tetap bisa menggantinya dari galeri HP.</label><input type="file" id="heroUpload" accept="image/*"></div>`+imageOptions()}
 if(type==='links'){title='Ubah Link';html=itemEditor(data.links,'links')+`<button class="add-btn" id="addItem">＋ Tambah Link</button>`}
 if(type==='photos'){title='Ubah Foto';html=imageOptions()+`<div class="field"><label>Pilih foto dari galeri HP (bisa beberapa)</label><input type="file" id="photoUpload" accept="image/*" multiple></div>`+itemEditor(data.photos,'photos')+`<button class="add-btn" id="addItem">＋ Tambah URL Foto</button>`}
 if(type==='projects'){title='Ubah Proyek';html=imageOptions()+itemEditor(data.projects,'projects')+`<button class="add-btn" id="addItem">＋ Tambah Proyek</button>`}
 $('#editorTitle').textContent=title;$('#editorBody').innerHTML=html;$('#editor').classList.add('open');$('#editor').setAttribute('aria-hidden','false');
 $('#bgTolerance')?.addEventListener('input',e=>$('#tolLabel').textContent=e.target.value);
 $('#addItem')?.addEventListener('click',()=>{if(type==='links')data.links.push({title:'Link baru',desc:'Deskripsi link',url:'https://',symbol:'↗'});if(type==='photos')data.photos.push('');if(type==='projects')data.projects.push({title:'Proyek baru',desc:'Deskripsi proyek',category:'PROJECT',image:'',url:'#'});openEditor(type)});
 $('#editorBody').querySelectorAll('.remove-item').forEach(b=>b.addEventListener('click',()=>{let i=+b.closest('.editor-item').dataset.index;(type==='links'?data.links:type==='photos'?data.photos:data.projects).splice(i,1);openEditor(type)}));
 $('#editorBody').querySelectorAll('.move-up,.move-down').forEach(b=>b.addEventListener('click',()=>{let el=b.closest('.editor-item'),i=+el.dataset.index,arr=type==='links'?data.links:type==='photos'?data.photos:data.projects,j=i+(b.classList.contains('move-up')?-1:1);if(j<0||j>=arr.length)return;[arr[i],arr[j]]=[arr[j],arr[i]];openEditor(type)}));
}
function closeEditor(){$('#editor').classList.remove('open');$('#editor').setAttribute('aria-hidden','true')}
function fileToData(file,mode='contain',removeBg=false,tolerance=35){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const img=new Image();img.onerror=reject;img.onload=()=>{let sw=img.width,sh=img.height,max=1500;if(sw>max||sh>max){let k=max/Math.max(sw,sh);sw=Math.round(sw*k);
sh=Math.round(sh*k)}let canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});let ratio=mode==='square'?1:mode==='portrait'?4/5:mode==='wide'?16/9:null,cw=sw,ch=sh,sx=0,sy=0;if(ratio){if(sw/sh>ratio){cw=Math.round(sh*ratio);sx=Math.round((sw-cw)/2)}else{ch=Math.round(sw/ratio);sy=Math.round((sh-ch)/2)}}canvas.width=cw;canvas.height=ch;ctx.drawImage(img,sx,
sy,cw,ch,0,0,cw,ch);
 if(removeBg){let im=ctx.getImageData(0,0,cw,ch),p=im.data,seen=new Uint8Array(cw*ch),stack=[];const add=(x,y)=>{if(x<0||y<0||x>=cw||y>=ch)return;let n=y*cw+x;if(!seen[n]){seen[n]=1;stack.push(n)}};for(let x=0;x<cw;x++){add(x,0);add(x,ch-1)}for(let y=0;y<ch;y++){add(0,y);add(cw-1,y)}let corners=[[0,0],[cw-1,0],[0,ch-1],[cw-1,ch-1]],base=[0,0,0];for(let [x,y] of corners){let n=(y*cw+x)*4;
base[0]+=p[n];base[1]+=p[n+1];base[2]+=p[n+2]}base=base.map(v=>v/4);let lim=Number(tolerance)*2.4;while(stack.length){let n=stack.pop(),k=n*4,dist=Math.sqrt((p[k]-base[0])**2+(p[k+1]-base[1])**2+(p[k+2]-base[2])**2);if(dist<lim){p[k+3]=0;let x=n%cw,y=Math.floor(n/cw);add(x+1,y);add(x-1,y);add(x,y+1);add(x,y-1)}}ctx.putImageData(im,0,0)}
 resolve(removeBg?canvas.toDataURL('image/png'):canvas.toDataURL('image/jpeg',.84));};img.src=reader.result};reader.readAsDataURL(file)})}
function requestEdit(type){const pass=prompt('Masukkan sandi untuk Mode Edit:');if(pass===null)return;const expected=document.querySelector('meta[name="edit-password"]')?.content||'';if(pass===expected)openEditor(type);else toast('Sandi salah.')}
$('#editToggle').onclick=()=>requestEdit('profile');
document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>requestEdit(b.dataset.edit));$('#closeEditor').onclick=$('#cancelEdit').onclick=closeEditor;$('#editor').addEventListener('click',e=>{if(e.target===$('#editor'))closeEditor()});
$('#saveEdit').onclick=async()=>{const body=$('#editorBody'),mode=$('#cropMode')?.value||'contain',remove=$('#removeBg')?.checked||false,tol=Number($('#bgTolerance')?.value||35);try{
 if(current==='profile'){body.querySelectorAll('[data-key]').forEach(el=>{if(el.dataset.key!=='heroImage')data[el.dataset.key]=el.value});let f=$('#heroUpload')?.files[0];if(f)data.heroImage=await fileToData(f,mode,remove,tol)}
 if(current==='links'||current==='projects'){body.querySelectorAll('.editor-item').forEach(el=>{let i=+el.dataset.index,obj=current==='links'?data.links[i]:data.projects[i];el.querySelectorAll('[data-key]').forEach(inp=>obj[inp.dataset.key]=inp.value)});if(current==='projects'){for(const input of body.querySelectorAll('.project-file')){let f=input.files[0];
if(f)data.projects[+input.dataset.projectFile].image=await fileToData(f,mode,remove,tol)}}}
 if(current==='photos'){body.querySelectorAll('.editor-item').forEach(el=>{let i=+el.dataset.index;data.photos[i]=el.querySelector('[data-key]').value});for(const input of body.querySelectorAll('.replace-photo')){let f=input.files[0];if(f)data.photos[+input.dataset.photoFile]=await fileToData(f,mode,remove,tol)}let fs=[...($('#photoUpload')?.files||[])];
for(let f of fs)data.photos.push(await fileToData(f,mode,remove,tol))}
 persist();closeEditor();}catch(e){toast('Foto gagal diproses. Coba foto yang lebih kecil.')}};
function lightbox(src){let box=$('#imageLightbox');$('#lightboxImage').src=src;box.classList.add('open');box.setAttribute('aria-hidden','false')}
document.addEventListener('click',e=>{let b=e.target.closest('[data-view-image]');if(b){let i=+b.dataset.viewImage;lightbox(data.photos[i])}if(e.target.id==='heroImage')lightbox(data.heroImage)});
$('#lightboxClose').onclick=()=>{$('#imageLightbox').classList.remove('open');$('#imageLightbox').setAttribute('aria-hidden','true')};$('#imageLightbox').onclick=e=>{if(e.target.id==='imageLightbox')$('#lightboxClose').click()};document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#lightboxClose').click()});
$('#backupBtn').onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='backup-portfolio.json';a.click();URL.revokeObjectURL(url);toast('Backup berhasil diunduh.')};
$('#restoreInput').onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let imported=JSON.parse(await f.text());if(!imported||!Array.isArray(imported.links)||!Array.isArray(imported.photos)||!Array.isArray(imported.projects))throw Error('Format salah');data=Object.assign(JSON.parse(JSON.stringify(defaults)),imported);
if(!data.heroImage||data.heroImage==='images/hero.jpg')data.heroImage=HERO_NORMAL;persist('Backup berhasil dipulihkan.');}catch(err){toast('File backup tidak valid.')}e.target.value=''};
const music=$('#backgroundMusic'),musicBtn=$('#musicToggle'),musicInput=$('#musicFileInput');let musicURL=null;
musicBtn.textContent='♫ Pilih Musik';
musicBtn.onclick=async()=>{if(!music.src){musicInput.click();return}try{if(music.paused){await music.play();musicBtn.textContent='Ⅱ Pause Musik'}else{music.pause();musicBtn.textContent='♫ Putar Musik'}}catch(e){toast('Musik belum bisa diputar.')}};
musicInput.onchange=async()=>{const file=musicInput.files&&musicInput.files[0];if(!file)return;if(musicURL)URL.revokeObjectURL(musicURL);musicURL=URL.createObjectURL(file);music.src=musicURL;try{await music.play();musicBtn.textContent='Ⅱ Pause Musik';toast('Musik berhasil diputar!')}catch(e){toast('Musik gagal diputar.')}};
render();

// EFEK REVEAL: foto edit hanya terbuka di sekitar titik sentuhan/kursor.
(function heroTouchEffect(){
 const area=document.getElementById('heroPhoto');
 const layer=document.getElementById('heroTouchImage');
 if(!area||!layer)return;
 let hideTimer=null;
 const reveal=e=>{
   const r=area.getBoundingClientRect();
   if(!r.width||!r.height)return;
   const x=Math.max(0,Math.min(r.width,e.clientX-r.left));
   const y=Math.max(0,Math.min(r.height,e.clientY-r.top));
   area.style.setProperty('--touch-x',x+'px');
   area.style.setProperty('--touch-y',y+'px');
   area.classList.add('touch-active');
   clearTimeout(hideTimer);
   if(e.pointerType==='touch')hideTimer=setTimeout(()=>area.classList.remove('touch-active'),850);
 };
 area.addEventListener('pointerdown',e=>{if(e.isPrimary)reveal(e)});
 area.addEventListener('pointermove',e=>{
   if(e.pointerType==='mouse'||(e.pointerType==='touch'&&(e.buttons>0||e.pressure>0)))reveal(e);
 });
 area.addEventListener('pointerup',e=>{if(e.pointerType==='touch'){clearTimeout(hideTimer);hideTimer=setTimeout(()=>area.classList.remove('touch-active'),850)}});
 area.addEventListener('pointercancel',()=>{clearTimeout(hideTimer);area.classList.remove('touch-active')});
 area.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')area.classList.remove('touch-active')});
})();
