import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

// export const zoomIn =
//   trigger('routeAnimations', [
//     transition('HomePage <=> InfoPage', [
//       query(':leave', [
//         style({
//           position: 'absolute',
//           transform: 'scale(20)'
//         }),
//         animate('1000ms ease',
//           style({opacity: 1, transform: 'scale(20)'}))
//       ]),
//     ])
//   ]);

export const zoomIn =
  trigger('routeAnimations', [
    // transition('* <=> *', [
    //   query(':enter', [
    //     style({
    //       position: 'absolute',
    //       left: 0,
    //       width: '100%',
    //       opacity: 0
    //     })
    //   ])
    // ]),

    transition('HomePage => InfoPage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          top: '50%',
          left: 0,
          right: 0,
          position: 'fixed', opacity: 1,
          // transform: 'scale(0)'
        })
      ]),
      query(':leave', animate('700ms cubic-bezier(1,.01,1,.53)',
        style({
          top: '50%',
          opacity: 0,
          transform: 'scale(5)',
          position: 'absolute',
          // display: 'contents',
        }))),
      query(':enter', [
        animate('200ms ease',
          style({
            opacity: 1,
            transform: 'scale(1)',
            top: 0
          }))
      ])]),

    transition('InfoPage => HomePage', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          left: 0,
          right: 0,
          position: 'fixed', opacity: 0,
          transform: 'scale(5)',
          top: '50%',

          // transform: 'scale(0)'
        })
      ]),
      query(':enter', animate('700ms cubic-bezier(1,.01,1,.53)',
        style({
          opacity: 1,
          transform: 'scale(1)',
          position: 'absolute',
          display: 'flex',
        }))),
      query(':leave', [
      animate('200ms ease',
        style({
          opacity: 0,
          transform: 'scale(1)',}))
    ])]),
  ]);
