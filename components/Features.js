import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Estoque no Local',
    description:
      'Com estoque diponível no local você pode atestar a quilidade do produto antes do carregamento e da enterga.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Entrega Rápida',
    description:
      'No caso da entrega ser feita por nosso pessoal, você pode contar com a opção de agendamento',
    icon: ScaleIcon,
  },
  {
    name: 'Fácil Localização',
    description:
      'Próximo aos principais corredores viários de Belo Horizonte, facilitando a visitação e a entrega de materiais.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Atendimento Personalizado',
    description:
      'Atacado ou Varejo, atendemos todos os perfis de clientes com foco em suas necessidades.',
    icon: AnnotationIcon,
  },
]

export default features
