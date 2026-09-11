# Guia de Contribuição

Este guia explica o fluxo de trabalho que a equipe deve seguir para propor,
desenvolver e entregar o projeto, utilizando branches e Pull Requests.

---

## 1. Clonando o Repositório

Este repositório já é criado com todos os membros da equipe como
colaboradores. Cada membro deve clonar o repositório para a sua máquina:

```bash
git clone https://github.com/profBruno-UFC-Qx/<nome-do-repositorio>.git
cd <nome-do-repositorio>
```

---

## 2. Proposta

1. Crie uma branch e edite `PROPOSTA.md` preenchendo todas as seções.
   ```bash
   git checkout main
   git pull origin main
   git checkout -b proposta
   ```
2. Faça commit e push da branch, depois abra um Pull Request para `main`.
3. Um check automático (`validar-proposta`) confere se as seções
   obrigatórias foram preenchidas antes mesmo da revisão do professor.
4. O professor revisa e aprova (ou pede ajustes) no próprio PR. Só depois
   do merge o desenvolvimento está oficialmente liberado.

## 3. Desenvolvimento

Depois da proposta aprovada, desenvolva o projeto livremente em uma ou
mais branches (a `main` fica protegida o semestre inteiro, então push
direto nela não funciona). Não é preciso abrir PR nem esperar aprovação
do professor a cada commit — só quando a equipe abrir o PR de entrega
final, na etapa 4.

## 4. Entrega Final

1. Crie uma branch e preencha `ENTREGA.md` por completo.
   ```bash
   git checkout -b entrega-final
   ```
2. Faça commit e push, depois abra um Pull Request para `main`.
3. O check automático `validar-entrega` confere se as seções obrigatórias
   (como executar, credenciais de teste, uso de IA, dificuldades
   encontradas) estão preenchidas.
4. O professor revisa e aprova. O merge desse PR é a confirmação formal
   da entrega.

## 5. Dicas Importantes

- Mantenha as mensagens de commit claras.
- Revise suas próprias mudanças antes de abrir o Pull Request.
- `ENTREGA.md` só deve ser preenchido próximo ao prazo final — antes
  disso é normal que fique com o texto de exemplo.
