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
      ]),
      // query(':enter', animateChild()),
    ]),
    // transition('* <=> FilterPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({  zoom: '5'})
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({  zoom: '5'}))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({  zoom: '5'}))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]);
