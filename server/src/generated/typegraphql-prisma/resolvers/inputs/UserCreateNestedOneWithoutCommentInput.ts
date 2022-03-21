import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommentInput } from "../inputs/UserCreateOrConnectWithoutCommentInput";
import { UserCreateWithoutCommentInput } from "../inputs/UserCreateWithoutCommentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCommentInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
