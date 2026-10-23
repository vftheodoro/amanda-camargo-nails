# Publicação e operação

## Domínio e DNS

1. Adicionar `amandacamargonails.com.br` ao projeto correto na Vercel.
2. Usar os registros exatos indicados pela Vercel, sem substituir servidores DNS ou registros MX/TXT existentes.
3. Configurar `www.amandacamargonails.com.br` para redirecionar permanentemente ao domínio sem www.
4. Verificar HTTPS, canônicas, robots e sitemap no domínio público.

O acesso ao provedor do domínio depende do titular. Não tratar a adição do domínio à Vercel como confirmação de DNS ou emissão do certificado.

## Busca local

- Verificar ou criar o Perfil da Empresa com Amanda como responsável.
- Manter nome, telefone, endereço e disponibilidade coerentes com este site.
- Selecionar a categoria adequada de salão de manicure e os serviços reais.
- Adicionar trabalhos autênticos e solicitar avaliações honestas a clientes, sem oferecer avaliações fictícias.
- Criar propriedade de domínio no Google Search Console, verificar por TXT e enviar `/sitemap.xml`.
- Acompanhar indexação, consultas, páginas de entrada e Core Web Vitals com dados reais.

Sem acesso ao Search Console ou Perfil da Empresa, essas etapas permanecem como atividades do titular. Não há instalação de rastreamento comportamental ou mensuração individual de cliques nesta versão.

## Aceite e manutenção

- Conferir preços e telefone antes de publicar alterações.
- Testar agenda, WhatsApp e Maps a cada troca de contato ou endereço.
- Atualizar o catálogo no site e na MinhaAgenda simultaneamente.
- Testar com teclado, a 375/768/1024/1440 px e com redução de movimento.
- Executar testes unitários, build e verificação HTTP antes de publicar.
- Manter imagens leves e dimensões explícitas; não incorporar feed do Instagram.
- Atualizar a data `lastModified` do sitemap quando houver alterações de conteúdo.
- Validar `NailSalon` e breadcrumbs em validadores Schema.org/Google; elegibilidade não garante exibição especial.

## Riscos e escala

O conteúdo é pré-renderizado e entregue por CDN. Os pontos externos são MinhaAgenda, WhatsApp e Google Maps; o site não controla a disponibilidade deles. Atualizações de fotos e preços exigem commit e novo deploy. O custo e limites de tráfego dependem do plano Vercel. Nenhum banco ou sessão de usuário é necessário.
