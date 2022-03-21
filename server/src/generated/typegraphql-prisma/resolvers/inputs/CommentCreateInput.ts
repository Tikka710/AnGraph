import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCommentInput } from "../inputs/UserCreateNestedOneWithoutCommentInput";

@TypeGraphQL.InputType("CommentCreateInput", {
  isAbstract: true
})
export class CommentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCommentInput, {
    nullable: true
  })
  user?: UserCreateNestedOneWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEdit?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
