import{j as r}from"./jsx-runtime-a51fe075.js";import{a as p,B as d}from"./index-433849f9.js";import{r as l}from"./index-6bd1afc7.js";import"./index-26461828.js";import"./_commonjsHelpers-de833af9.js";const x={title:"Data Display/Toast",component:p,args:{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},argTypes:{children:{control:{type:null}}}},e=t=>{const[i,n]=l.useState(t.open),c=()=>{n(!0)};return r.jsx(p,{...t,open:i,onOpenChange:n,children:r.jsx(d,{variant:"tertiary",onClick:c,children:"Add to calendar"})})};var o,a,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ToastProps) => {
  const [open, setOpen] = useState(args.open);
  const handleOpen = () => {
    setOpen(true);
  };
  return <Toast {...args} open={open} onOpenChange={setOpen}>
      <Button variant='tertiary' onClick={handleOpen}>
        Add to calendar
      </Button>
    </Toast>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const y=["Primary"];export{e as Primary,y as __namedExportsOrder,x as default};
//# sourceMappingURL=Toast.stories-b2e264f5.js.map
